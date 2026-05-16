stage 1: 
REST APIs:
-> GET /notifications
-> POST /notifications
-> PUT /notifications/ :id/read
-> DELTE /notifications/:id 

stage 2:
databases: users, notifications, notifications_status by using PostgreSQL

stage 3: 
Query is sllow because : no indexing and fully based on table scannung
adding indexes: studentID, isRead, createdAt
stage 4:
Imporve performance using Redis caching, pagination, lazy loading

stage5:
uses queue system for RabbitMQ, retry failed emails, and async processing

stage 6:
use priority queue and max heap . priority done based on notification type and recency
