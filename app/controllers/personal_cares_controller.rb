class PersonalCaresController < ApplicationController
  before_action :set_personal_care, only: [:show, :update, :destroy]

  # GET /personal_cares
  def index
    @personal_cares = User.find_by(id: session[:user_id]).personal_cares.last

    render json: @personal_cares
  end

  # GET /personal_cares/1
  def show
    render json: @personal_care
  end

  # POST /personal_cares
  def create
    @personal_care = PersonalCare.new(personal_care_params)

    if @personal_care.save
      render json: @personal_care, status: :created, location: @personal_care
    else
      render json: @personal_care.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /personal_cares/1
  def update
    if @personal_care.update(personal_care_params)
      render json: @personal_care
    else
      render json: @personal_care.errors, status: :unprocessable_entity
    end
  end

  # DELETE /personal_cares/1
  def destroy
    @personal_care.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_personal_care
      @personal_care = PersonalCare.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def personal_care_params
      params.require(:personal_care).permit(:amount, :monthly_amount, :user_id)
    end
end
