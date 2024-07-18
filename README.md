## Enable TCP/IP:
right click on the taskbar and select "Computer Management" and follow the steps mentioned in the screenshot

![Enable TCPIP Screenshot](/screenshots/enable-tcp.jpg?raw=true "Enable TCP Steps")

![restart sql service Screenshot](/screenshots/restart-process.jpg?raw=true "restart service Steps")

## Enable SQL Authentication:
follow steps mentioned in the screenshot

![Enable SQL Auth Screenshot](/screenshots/enable-sqlauth.jpg?raw=true "Enable SQL Auth Steps")

## Create Login in SQL
follow steps mentoned in the screenshot

![create login Screenshot](/screenshots/login.jpg?raw=true "create login Steps")

## Determine port number
to determine port number in you machine,open SSMS and execute below query
```
USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on' 
GO
```
T
