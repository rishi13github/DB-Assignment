answers for questions 1,2,3 for the task;

"" : represents Entity/table
'' : represents Attributes/elements of table 

Q1:Explain the relation between product and product_category?


Ans:- The relation between the entities "product" and "product_category" can be defined as a one to one relation as all attributes in product_category defined as 'name','desc','created_at','modified_at' ,'deleted_at' are all belonging to a single product and every product in the database is given a unique id and no two products can have same id  and category id should always be unique to differentiate between different  product categories .

-> in the "product_category" entity the attribute 'id' is the primary key and it is passed as foreign key to "product" entity and is named as 'category_id'.



Q2:HOW TO ENSURE THAT EACH EACH PRODUCT IN "PRODUCT" TABLE HAS VALID CATEGORY ASSIGNED TO IT?

ANS: In order to ensure that each product in "product" table has valid category assigned to it we can initially create the list of products and map them into their respective categories.

secondly, we can ensure that 'id' attribute in product_category is shared as foreign key to "prodct" attribute as it will ensure that proper valid data is sent by the "product_category" attribute.

we can also review the database constantly and perform validation tests and also enabling one to one relation also helps to validate the correct category. 

Q3:create the schema

ANS: the schema is created in mongodb