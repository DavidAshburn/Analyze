class Task < ApplicationRecord
	belongs_to :lead
	belongs_to :user
end
