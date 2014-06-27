class AddSalaryToMeetings < ActiveRecord::Migration
  def change
    add_column :meetings, :salary, :decimal
  end
end
