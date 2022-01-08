class EntertainmentsController < ApplicationController
  before_action :set_entertainment, only: [:show, :update, :destroy]

  # GET /entertainments
  def index
    @entertainments = User.find_by(id: session[:user_id]).entertainments.last

    render json: @entertainments
  end

  # GET /entertainments/1
  def show
    render json: @entertainment
  end

  # POST /entertainments
  def create
    @entertainment = Entertainment.new(entertainment_params)

    if @entertainment.save
      render json: @entertainment, status: :created, location: @entertainment
    else
      render json: @entertainment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /entertainments/1
  def update
    if @entertainment.update(entertainment_params)
      render json: @entertainment
    else
      render json: @entertainment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /entertainments/1
  def destroy
    @entertainment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entertainment
      @entertainment = Entertainment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def entertainment_params
      params.require(:entertainment).permit(:amount, :monthly_amount, :user_id)
    end
end
