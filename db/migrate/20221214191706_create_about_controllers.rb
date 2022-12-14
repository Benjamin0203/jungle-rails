class CreateAboutControllers < ActiveRecord::Migration[6.1]
  def change
    create_table :about_controllers do |t|

      t.timestamps
    end
  end
end
