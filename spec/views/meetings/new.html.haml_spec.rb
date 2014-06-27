require 'rails_helper'

RSpec.describe "meetings/new", :type => :view do
  before(:each) do
    assign(:meeting, Meeting.new(
      :participant_count => 1,
      :cost => "9.99",
      :location => "MyString",
      :agenda => "MyString",
      :actions => "MyString"
    ))
  end

  it "renders new meeting form" do
    render

    assert_select "form[action=?][method=?]", meetings_path, "post" do

      assert_select "input#meeting_participant_count[name=?]", "meeting[participant_count]"

      assert_select "input#meeting_cost[name=?]", "meeting[cost]"

      assert_select "input#meeting_location[name=?]", "meeting[location]"

      assert_select "input#meeting_agenda[name=?]", "meeting[agenda]"

      assert_select "input#meeting_actions[name=?]", "meeting[actions]"
    end
  end
end
