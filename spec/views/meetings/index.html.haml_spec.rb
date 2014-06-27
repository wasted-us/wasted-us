require 'rails_helper'

RSpec.describe "meetings/index", :type => :view do
  before(:each) do
    assign(:meetings, [
      Meeting.create!(
        :participant_count => 1,
        :cost => "9.99",
        :location => "Location",
        :agenda => "Agenda",
        :actions => "Actions"
      ),
      Meeting.create!(
        :participant_count => 1,
        :cost => "9.99",
        :location => "Location",
        :agenda => "Agenda",
        :actions => "Actions"
      )
    ])
  end

  it "renders a list of meetings" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "Location".to_s, :count => 2
    assert_select "tr>td", :text => "Agenda".to_s, :count => 2
    assert_select "tr>td", :text => "Actions".to_s, :count => 2
  end
end
