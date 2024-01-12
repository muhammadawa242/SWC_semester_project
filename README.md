# SWC_semester_project

Example Project: https://github.com/raj074/mern-social-media


Basic Features of website:
1) User Connectivity:
- Display a list of a user's connections (friends or followers).
- Allow users to send connection requests and accept/reject them.

2) Email Notifications:
- Implement email notifications for actions like new followers, comments, or mentions.
- Use nodemailer for sending emails.

3) Search Functionality:
- Implement a basic search functionality for users and posts.
- Allow users to find and connect with others easily

4) Responsive Design with Bootstrap:
- Ensure your website is fully responsive using Bootstrap components and grid system.
- Optimize the user interface for various screen sizes.

5) Real-time Chat:
- Implement a real-time chat feature using Socket.io.
Users can send and receive messages instantly


## Backend API endpoints description:
(Ignore the first letter in capital)

- Auth/register
	• Post
	• Req data
	• Res saved data
- Auth/login
	• Post
	• Req -> Email, Password
	• Res -> token, user data
- Users/:id
	• Get
	• Req -> id
	• Res -> user
- Users/:id/friends
	• Get
	• Req -> id
	• Res -> limited friend info
- Users/:str/search_name + others
	• Get
	• Req -> string param
	• Res -> limited searched users
- Users/:id/:friend_id
	• Patch
	• Req -> id, friend_id
	• Res  -> limited friend info
	• Adds friends for both
- Posts/
	• Get
	• Res -> all posts
- Posts/
	• Patch
	• Req -> user_id, desc, pictuer_path
	• Res -> all posts along updated one
- Posts/:id/posts
	• Get
	• Req -> id param
	• Res -> users' posts
- Posts/:str/search_posts
	• Get
	• Req -> str param
	• Res -> searched posts
	
