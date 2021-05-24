# svn2git ![Release](https://img.shields.io/github/release/yodamad/svn2git.svg?style=popout) [![svn2git CI](https://github.com/yodamad/svn2git/actions/workflows/main.yml/badge.svg)](https://github.com/yodamad/svn2git/actions/workflows/main.yml) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ![Commit](https://img.shields.io/github/last-commit/yodamad/svn2git.svg?style=flat) ![docker](https://img.shields.io/docker/pulls/yodamad/svn2git)

This application helps you to migrate from SVN to Gitlab.

It can be run from command line after downloading latest version from [github](https://github.com/yodamad/svn2git/releases) :

```shell script
java -jar svn2git.jar
```
But it is also available from 🐳 [Docker Hub](https://hub.docker.com/repository/docker/yodamad/svn2git) :

```shell script
docker run --name svn2git -v /tmp/svn2git:/svn2git -p 8080:8080 yodamad/svn2git:latest
```

## ✨ Some quick tips to help you with the tool

💪 If you have large repositories to migrate, you may need to ↗️ JVM size :
```shell script
java -Xms2g -Xmx4g -jar svn2git.jar
```

👀 You can activate debug mode
```shell script
java -jar svn2git.jar --logging.level.fr.yodamad.svn2git=DEBUG
```

🛠 There are many configurations keys available in [application.yml](src/main/resources/config/application.yml), you can override them at runtime :
```shell script
java -jar svn2git.jar --<key>=<new_value>

# Sample to override directory where migrations are processed
java -jar svn2git.jar --application.work.directory=/home/svn2git
```

## Others

All functional documentation can be find in [wiki](https://github.com/yodamad/svn2git/wiki) section 

This application was generated using JHipster (5.4.2), you can find documentation and help at [jhipster](https://www.jhipster.tech/documentation-archive/v5.4.2).
