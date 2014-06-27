require 'rails_helper'

RSpec.describe "meetings/show", :type => :view do
  before(:each) do
    @meeting = assign(:meeting, Meeting.create!(
      :participant_count => 1,
      :cost => "9.99",
      :location => "Location",
      :agenda => "Agenda",
      :actions => "Actions"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/Location/)
    expect(rendered).to match(/Agenda/)
    expect(rendered).to match(/Actions/)
  end
end
