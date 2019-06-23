class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :liked_accounts, :follow_friends
  end
end