class SavingsItemsController < ApplicationController
  before_action :set_savings_item, only: [:show, :update, :destroy]

  # GET /savings_items
  def index
    @user = User.find_by(id: session[:user_id])
    @savings_items = @user.savings_items
    @new_items = @savings_items.sort_by { |hash| hash['key'] }.reverse
    render json: @new_items
  end

  # GET /savings_items/1
  def show
    render json: @savings_item
  end

  # POST /savings_items
  def create
    @savings_item = SavingsItem.new(savings_item_params)

    if @savings_item.save
      render json: @savings_item, status: :created, location: @savings_item
    else
      render json: @savings_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /savings_items/1
  def update
    @savings_item.update(savings_item_params)
  end

  # DELETE /savings_items/1
  def destroy
    @savings_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_savings_item
      @savings_item = SavingsItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def savings_item_params
      params.require(:savings_item).permit(:user_id, :name, :target_amount, :current_amount, :target_date)
    end
end
