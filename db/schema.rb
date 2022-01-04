ActiveRecord::Schema.define(version: 2022_01_04_022812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budget_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "category"
    t.integer "total_budget"
    t.integer "current_total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_budget_items_on_user_id"
  end

  create_table "income_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.integer "amount"
    t.string "category"
    t.date "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_income_items_on_user_id"
  end

  create_table "savings_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.text "note"
    t.integer "target_amount"
    t.integer "current_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_savings_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "age"
    t.string "gender"
    t.string "marital_status"
    t.integer "annual_income"
    t.integer "balance"
    t.integer "total_expenses"
    t.integer "total_income"
    t.integer "monthly_budget"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "budget_items", "users"
  add_foreign_key "income_items", "users"
  add_foreign_key "savings_items", "users"
end
