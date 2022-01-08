class OthersController < ApplicationController
  before_action :set_other, only: [:show, :update, :destroy]

  # GET /others
  def index
    @others = User.find_by(id: session[:user_id]).others.last

    render json: @others
  end

  # GET /others/1
  def show
    render json: @other
  end

  # POST /others
  def create
    @other = Other.new(other_params)

    if @other.save
      render json: @other, status: :created, location: @other
    else
      render json: @other.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /others/1
  def update
    if @other.update(other_params)
      render json: @other
    else
      render json: @other.errors, status: :unprocessable_entity
    end
  end

  # DELETE /others/1
  def destroy
    @other.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_other
      @other = Other.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def other_params
      params.require(:other).permit(:amount, :monthly_amount, :user_id)
    end
end
