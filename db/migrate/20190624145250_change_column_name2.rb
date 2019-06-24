class ChangeColumnName2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :follow_friends, :follow_profiles
  end
end