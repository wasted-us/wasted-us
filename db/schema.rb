# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140627090101) do

  create_table "meetings", force: true do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer  "participant_count"
    t.decimal  "cost"
    t.string   "location"
    t.string   "agenda"
    t.string   "actions"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.decimal  "salary"
    t.string   "name"
    t.integer  "checked_out_participant_count", default: 0, null: false
  end

end
