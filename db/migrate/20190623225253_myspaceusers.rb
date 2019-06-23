class Myspaceusers < ActiveRecord::Migration[5.2]
  def up
    drop_table :myspaceusers
  end
  
 def down
    raise ActiveRecord::IrreversibleMigration
  end
 end
