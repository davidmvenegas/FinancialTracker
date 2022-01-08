ActiveRecord::Schema.define(version: 2022_01_08_032104) do
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
