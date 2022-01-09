# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_08_032104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entertainments", force: :cascade do |t|
    t.integer "amount"
    t.integer "monthly_amount"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_entertainments_on_user_id"
  end

  create_table "foods", force: :cascade do |t|
    t.integer "amount"
    t.integer "monthly_amount"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_foods_on_user_id"
  end

  create_table "housings", force: :cascade do |t|
    t.integer "amount"
    t.integer "monthly_amount"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_housings_on_user_id"
  end

  create_table "income_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.float "amount"
    t.string "category"
    t.date "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_income_items_on_user_id"
  end

  create_table "others", force: :cascade do |t|
    t.integer "amount"
    t.integer "monthly_amount"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_others_on_user_id"
  end

  create_table "personal_cares", force: :cascade do |t|
    t.integer "amount"
    t.integer "monthly_amount"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_personal_cares_on_user_id"
  end

  create_table "savings_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.integer "target_amount"
    t.float "current_amount"
    t.date "target_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_savings_items_on_user_id"
  end

  create_table "transportations", force: :cascade do |t|
    t.integer "amount"
    t.integer "monthly_amount"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_transportations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "profile_picture"
    t.string "email"
    t.string "password_digest"
    t.integer "age"
    t.string "gender"
    t.string "marital_status"
    t.integer "annual_income"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "entertainments", "users"
  add_foreign_key "foods", "users"
  add_foreign_key "housings", "users"
  add_foreign_key "income_items", "users"
  add_foreign_key "others", "users"
  add_foreign_key "personal_cares", "users"
  add_foreign_key "savings_items", "users"
  add_foreign_key "transportations", "users"
end
