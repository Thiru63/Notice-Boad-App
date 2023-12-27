The Notice Board Application 

   --> Backend deploy link
        https://notice-board-app.onrender.com/
        apis-> 1. register - https://notice-board-app.onrender.com/user/register , this is post method and body must contains name,email,phone_number,password,department and key word also same
               2. login - https://notice-board-app.onrender.com/user/login , this is post method and body must contains email,password and key word also same
               3. create notice - https://notice-board-app.onrender.com/user/notice , this is post method and body must contains title,category,body and headers must contain
                  bearer token in authorization and key word also same
               4. get notices - https://notice-board-app.onrender.com/user/notice , this is get method and  headers must contain
                  bearer token in authorization and key word also same and you can give category filteration in query with same keyword
               5. update notice - https://notice-board-app.onrender.com/user/notice , this is put method and  headers must contain
                  bearer token in authorization and key word also same and params must contain noticeId with same keyword 
               6. delete notice - https://notice-board-app.onrender.com/user/notice , this is delete method and  headers must contain
                  bearer token in authorization and key word also same and params must contain noticeId with same keyword   
