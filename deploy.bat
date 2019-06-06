@echo off
SET MY_IONIC_ENV=%1

IF NOT DEFINED MY_IONIC_ENV (
  echo HELP
  echo deploy [env]
  GOTO :end
)

echo deploy mode is %MY_IONIC_ENV%
GOTO :build

:build
echo start buildind project
call ionic build --%MY_IONIC_ENV%
echo project built
GOTO :use

:use
echo define used firebase project
call firebase use %MY_IONIC_ENV%
echo %MY_IONIC_ENV% defined as used firebase project
GOTO :functions

:functions
echo define functions'variables
set PROPERTIES=.\functions\conf\functions
if not "%MY_IONIC_ENV%" == "dev" (
  set PROPERTIES=%PROPERTIES%.%MY_IONIC_ENV%
)
set PROPERTIES=%PROPERTIES%.properties
echo %PROPERTIES% will be used as property file for functions
set command=firebase functions:config:set
for /f "tokens=*" %%a in (%PROPERTIES%) DO call :concat %%a
call %command%
echo functions'variables defined
GOTO :deploy

:deploy
echo deploy firebase project
call firebase deploy
echo firebase project deployed
GOTO :use_default

:use_default
echo set back used firebase project to default
call firebase use default
echo used firebase project set back to default
GOTO :end

:concat
set command=%command% %*

:end
SET MY_IONIC_ENV=


