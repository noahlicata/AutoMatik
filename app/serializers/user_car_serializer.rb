class UserCarSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :version, :image

  def year
    self.object.car.year
  end

  def make
    self.object.car.make
  end

  def model
    self.object.car.model
  end

  def version
    self.object.car.version
  end

  def image
    self.object.car.image
  end
end
