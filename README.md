# Enable TCP/IP:
follow the steps mentioned in the screenshot

![Enable TCPIP Screenshot](/screenshots/enable-tcp.jpg?raw=true "Enable TCP Steps")

to determine port number in you machine,open SSMS and execute below query
```
USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on' 
GO
```
T
