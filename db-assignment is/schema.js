db.createcollection("product",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            properties:{
                id:{
                    bsonType:"int"
                },
                name:{
                    bsonType:"string"

                },
                desc:{
                    bsonType:"text"

                },
                SKU:{
                    bsonType:"varchar"

                },
                category_id:{
                    bsonType:"int"

                },
                inventory_id:{
                    bsonType:"int"

                },
                price:{
                    bsonType:"decimal"

                },
                discount_id:{
                    bsonType:"int"

                },
                created_at:{
                    bsonType:"timestamp"

                },
                modified_at:{
                    bsonType:"timestamp"

                },
                deleted_at:{
                    bsonType:"timestamp"

                }
            }
        }
    }
});

db.createcollection("product_category",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            properties:{
                id:{
                    bsonType:"int"
                },
                name:{
                    bsonType:"string"

                },
                desc:{
                    bsonType:"text"

                },
                
                created_at:{
                    bsonType:"timestamp"

                },
                modified_at:{
                    bsonType:"timestamp"

                },
                deleted_at:{
                    bsonType:"timestamp"

                }
            }
        }
    }
});

db.createcollection("product_inventory",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            properties:{
                id:{
                    bsonType:"int"
                },
                
                quantity:{
                    bsonType:"int"

                },
    
                created_at:{
                    bsonType:"timestamp"

                },
                modified_at:{
                    bsonType:"timestamp"

                },
                deleted_at:{
                    bsonType:"timestamp"

                },
            }
        }
    }
});

db.createcollection("discount",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            properties:{
                id:{
                    bsonType:"int"
                },
                name:{
                    bsonType:"string"

                },
                desc:{
                    bsonType:"text"

                },
               
                discount_percent:{
                    bsonType:"decimal"

                },
                active:{
                    bsonType:"boolean"
                },
                created_at:{
                    bsonType:"timestamp"

                },
                modified_at:{
                    bsonType:"timestamp"

                },
                deleted_at:{
                    bsonType:"timestamp"

                },
            }
        }
    }
});


//a dummy data is created where we can implement the primary and freign keys and test the database functioning//

//in order to implement the database i can also create the server run it using atlas and then connect the database to api  to retrieve the data and also add the data//