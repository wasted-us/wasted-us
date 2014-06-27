class EmailController < ApplicationController
  def email
    Rails.logger.debug('***********TEST')
    # Your domain
    domain = "wasted.us"

    # From Email Address
    from_address = "wasted@wasted.us"

    # To Email Address
    to_address = params[:email]

    # Subject
    subject = "Thanks for using Wasted!"

    # Text Body
    text = "You wasted a lot of time.\n\nLove,\nYour friends at Wasted" + params[:meeting_notes]

    # HTML Body
    html = "<table style=\"border: solid 1px #000; background-color: #666; font-family: verdana, tahoma, sans-serif; color: #fff;\"> <tr> <td> <h2>Hello,</h2> <p>This is a test message from SendGrid.    We have sent this to you because you requested a test message be sent from your account.</p> <a href=\"http://www.google.com\" target=\"_blank\">This is a link to google.com</a> <p> <a href=\"http://www.apple.com\" target=\"_blank\">This is a link to apple.com</a> <p> <a href=\"http://www.sendgrid.com\" target=\"_blank\">This is a link to sendgrid.com</a> </p> <p>Thank you for reading this test message.</p> Love,<br/> Your friends at SendGrid</p> <p> <img src=\"http://cdn1.sendgrid.com/images/sendgrid-logo.png\" alt=\"SendGrid!\" /> </td> </tr> </table>"

    begin

      Rails.logger.debug('***********TEST2')
      require "rubygems"
      require "mail"
      require "json"
      Rails.logger.debug('***********TEST3')

      sg_username = "ksweet"
      sg_password = ""

      Mail.defaults do
        delivery_method :smtp, { :address   => "smtp.sendgrid.net",
                                 :port      => 587,
                                 :domain    => domain,
                                 :user_name => sg_username,
                                 :password  => sg_password,
                                 :authentication => "plain",
                                 :enable_starttls_auto => true }
      end
      mail = Mail.deliver do
        to to_address
        from from_address
        subject subject
        text_part do
          body text
        end
        html_part do
          content_type "text/html; charset=UTF-8"
          body html
        end
      end

      Rails.logger.debug('***********TEST4')
      puts "Email sent successfully."
    rescue Exception => e
      puts e.message
    end
  end
end