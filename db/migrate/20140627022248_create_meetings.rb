class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.timestamp :start_time
      t.timestamp :end_time
      t.integer :participant_count
      t.decimal :cost
      t.string :location
      t.string :agenda
      t.string :actions

      t.timestamps
    end
  end
end
