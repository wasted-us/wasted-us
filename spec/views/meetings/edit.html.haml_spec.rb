require 'rails_helper'

RSpec.describe "meetings/edit", :type => :view do
  before(:each) do
    @meeting = assign(:meeting, Meeting.create!(
      :participant_count => 1,
      :cost => "9.99",
      :location => "MyString",
      :agenda => "MyString",
      :actions => "MyString"
    ))
  end

  it "renders the edit meeting form" do
    render

    assert_select "form[action=?][method=?]", meeting_path(@meeting), "post" do

      assert_select "input#meeting_participant_count[name=?]", "meeting[participant_count]"

      assert_select "input#meeting_cost[name=?]", "meeting[cost]"

      assert_select "input#meeting_location[name=?]", "meeting[location]"

      assert_select "input#meeting_agenda[name=?]", "meeting[agenda]"

      assert_select "input#meeting_actions[name=?]", "meeting[actions]"
    end
  end
end
