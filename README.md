to determine port number in you machine,open SSMS and execute below query
```USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on' 
GO

T