# Task_NextGrowthLabs
## Django Evaluation

This repository contains my solution for the Django evaluation, which consists of three problem sets. Each problem set is described below along with additional submission details.

## Problem Set 1 - Working with Regex
### Task

Write a regular expression to extract all the numbers with an orange color background from the given JSON-like text.

### Solution

The regex to extract numbers with an orange color background is as follows:

```python
import re

text = [t.text for t in text_elements]
s = ""
for i in text:
    s += i

numbers = re.findall(r'(?<=color: orange">)(\d+)', s)
print(numbers)
```
---
# Problem Set-2
# Website with Admin and User Components

This repository contains a Django-based web application with both **Admin-facing** and **User-facing** functionalities. The application exposes all endpoints via REST API, with proper authentication, permissions, and detailed documentation.

## Components

### 1. **Admin Facing**

- Admin users can add **Android apps** and assign **points** to users for downloading the app.
- Admin users can manage the points awarded to users for each app.

### 2. **User Facing**

- **Users** can sign up, log in, and view:
  - **Profile Name**
  - **Points Earned**
  - **Tasks Completed**

The **REST API** will expose endpoints for interacting with both the **Admin** and **User** functionalities. Proper authentication and permissions will be enforced for the admin and user roles.

## Key Features

- **Admin-facing**:
  - Admin can add Android apps.
  - Admin can assign points to users for downloading apps.
  - Admin can view all users and their points.

- **User-facing**:
  - Users can view a list of Android apps and points.
  - Users can sign up and log in.
  - Users can see their profile, points, and tasks completed.

## API Documentation

Please refer to the following API documentation for detailed information about the endpoints:

- **GET** `/api/apps/` - Get a list of all Android apps.
- **POST** `/api/apps/` - Admin can add a new Android app and assign points.
- **POST** `/api/signup/` - User can sign up.
- **POST** `/api/login/` - User can log in.
- **GET** `/api/profile/` - Get the user’s profile, points, and tasks completed.

### Authentication and Permissions

1. **User Authentication**: The user should be able to sign up and log in using email and password. Feel free to use Django's built-in authentication or third-party packages like `djoser` for API-based authentication.
2. **Permissions**: The API endpoints will ensure that:
   - Admin users can only access admin endpoints.
   - Regular users can only access user-facing endpoints.

## Endpoints

### Admin-Facing Endpoints

1. **Create an App** (Admin Only):
    - **POST** `/api/admin/app/`
    - **Required Data**: `app_name`, `points`
    - **Permissions**: Only accessible by admin users.
    - **Response**: Status message confirming the app creation.

2. **View All Users** (Admin Only):
    - **GET** `/api/admin/users/`
    - **Permissions**: Only accessible by admin users.
    - **Response**: List of users with their points and tasks.

### User-Facing Endpoints

1. **User Signup**:
    - **POST** `/api/signup/`
    - **Required Data**: `name`, `email`, `password`
    - **Response**: A confirmation message and a token for authentication.

2. **User Login**:
    - **POST** `/api/login/`
    - **Required Data**: `email`, `password`
    - **Response**: A JWT token for authentication.

3. **View Profile**:
    - **GET** `/api/profile/`
    - **Permissions**: Only accessible by authenticated users.
    - **Response**: The user’s name, points earned, and tasks completed.

4. **View Apps**:
    - **GET** `/api/apps/`
    - **Permissions**: Accessible by all users.
    - **Response**: List of all Android apps and the associated points.

## Installation and Setup

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone [repository_url]
    ```

2. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Configure the database settings in `settings.py`.

4. Run the database migrations:

    ```bash
    python manage.py migrate
    ```

5. Start the development server:

    ```bash
    python manage.py runserver
    ```

6. Access the API via `http://127.0.0.1:8000/api/`.

## Technologies Used

- **Django**: Web framework.
- **Django REST Framework**: For creating RESTful APIs.
- **JWT Authentication**: For user login and authentication.
- **SQLite/PostgreSQL**: Database for storing user data and apps.
- **Django Models**: Used to define the database structure.

## Conclusion

This web application provides a simple and efficient way for both admin and users to manage Android apps, track earned points, and manage tasks. The application is flexible and can be extended to accommodate further features.
--
# Problem Set 3 - Additional Questions

## A. Write a note about your choice of system to schedule periodic tasks and its scalability.

### Solution

For scheduling periodic tasks in a Python and Django environment, I have chosen **Celery** as the preferred system. Celery is a distributed task queue framework that allows for efficient and reliable task scheduling and execution.

### Reasons for Choosing Celery:

1. **Reliability**: Celery is known for its reliability and fault-tolerance. It has built-in mechanisms to handle task failures and retries, ensuring that scheduled tasks are executed consistently and reliably.
2. **Scalability**: Celery is designed to handle large-scale distributed task processing. It supports distributed task queues and can easily scale horizontally by adding more worker nodes as the workload increases.
3. **Task Prioritization**: Celery provides the flexibility to prioritize tasks based on their importance or urgency. This feature ensures that critical tasks are executed promptly, while less time-sensitive tasks are processed accordingly.
4. **Integration with Django**: Celery integrates seamlessly with Django, making it an ideal choice for scheduling periodic tasks in Django applications. It leverages Django's database and ORM to store task results and track task progress.

### Possible Challenges and Solutions

While Celery is a powerful tool, there are a few challenges you may face:
- **Complexity**: Setting up Celery with Django can be complex, especially when configuring the message broker (e.g., RabbitMQ or Redis) and worker nodes. However, this complexity can be managed through good documentation and understanding of the Celery configuration process.
- **Monitoring**: Keeping track of the tasks’ status and performance might require additional tools like Celery Flower or other monitoring systems.
  
By adopting Celery for scheduling periodic tasks in Python and Django, you benefit from its reliability, scalability, and seamless integration with Django, providing a robust foundation for efficient task execution in production environments.

---

## B. Explain the circumstances in which you would use Flask instead of Django, and vice versa.

### Solution

Flask and Django are both popular web frameworks in Python, but they have different strengths and are suitable for different circumstances. Below are scenarios where you would choose one over the other:

### Use Flask:

1. **Lightweight and Flexibility**: 
    - If you have a small-scale project or need a lightweight framework with minimal dependencies, Flask is a good choice. It allows more flexibility in terms of choosing components and libraries, making it easier to customize and tailor to specific project requirements.

2. **Microservices and APIs**: 
    - Flask is well-suited for building microservices and APIs. Its minimalistic nature and modular design make it efficient for creating lightweight and fast API endpoints.

3. **Learning and Simplicity**: 
    - If you are new to web development or prefer a simpler framework, Flask's minimalistic approach and straightforward design make it easier to grasp and learn.

### Use Django:

1. **Rapid Development**: 
    - Django is known for its "batteries included" philosophy, providing a comprehensive set of tools and features out of the box. It excels in rapid development scenarios, where you need to quickly build and deploy complex web applications with built-in functionality for authentication, database management, admin interface, and more.

2. **Large-Scale Projects**: 
    - When working on large-scale projects that require extensive functionality, Django's opinionated structure and conventions help maintain organization and consistency. It provides a robust ORM, authentication system, form handling, and powerful templating engine, reducing the need for manual configuration.

3. **Content Management Systems (CMS)**: 
    - If your project involves building a CMS or requires content management capabilities, Django's admin interface provides an intuitive and powerful administration tool to manage content models and user permissions.

### Conclusion

The decision between Flask and Django should be based on the specific requirements of the project, the development team's familiarity with the frameworks, and the desired trade-offs between simplicity, flexibility, and built-in functionality. Flask is better for smaller, simpler projects with specific needs, while Django is more suitable for larger, complex applications requiring rapid development and extensive built-in features.
