class IncomeItemsController < ApplicationController
  before_action :set_income_item, only: [:show, :update, :destroy]

  # GET /income_items
  def index
    @income_items = IncomeItem.all
    @new_items = @income_items.sort_by { |hash| hash['key'] }.reverse
    render json: @new_items
  end

  # GET /income_items/1
  def show
    render json: @income_item
  end

  # POST /income_items
  def create
    @income_item = IncomeItem.new(income_item_params)

    if @income_item.save
      render json: @income_item, status: :created, location: @income_item
    else
      render json: @income_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /income_items/1
  def update
    if @income_item.update(income_item_params)
      render json: @income_item
    else
      render json: @income_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /income_items/1
  def destroy
    @income_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_income_item
      @income_item = IncomeItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def income_item_params
      params.require(:income_item).permit(:user_id, :name, :amount, :category, :date)
    end
end
