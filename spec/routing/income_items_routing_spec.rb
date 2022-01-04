require "rails_helper"

RSpec.describe IncomeItemsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/income_items").to route_to("income_items#index")
    end

    it "routes to #show" do
      expect(get: "/income_items/1").to route_to("income_items#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/income_items").to route_to("income_items#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/income_items/1").to route_to("income_items#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/income_items/1").to route_to("income_items#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/income_items/1").to route_to("income_items#destroy", id: "1")
    end
  end
end
