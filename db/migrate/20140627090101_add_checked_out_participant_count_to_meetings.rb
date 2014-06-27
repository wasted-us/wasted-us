class AddCheckedOutParticipantCountToMeetings < ActiveRecord::Migration
  def change
    add_column :meetings, :checked_out_participant_count, :integer, :null => false, :default => 0
  end
end
