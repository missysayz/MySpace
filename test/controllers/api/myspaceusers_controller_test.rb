require 'test_helper'

class Api::MyspaceusersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_myspaceusers_index_url
    assert_response :success
  end

  test "should get update" do
    get api_myspaceusers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_myspaceusers_destroy_url
    assert_response :success
  end

end
