### Docker



docker是什么？轻量级虚拟机



容器（Container）——虚拟的计算机

镜像（Image）——安装操作系统的光盘

通过镜像（对象）创建容器（实例）







镜像——>docker run——>容器





docker安装

运行：

docker run ubuntu echo 'Hello World'



查看镜像：docker images

删除镜像：docker rmi ubuntu

如果无法直接删除镜像，需要先删除容器

删除容器：Docker rm 容器id或容器名

查看容器：docker ps

查看历史记录：docker ps -a

将命令封装到镜像中：docker run hello-world



运行镜像：

docker run [options] <image name>|<id> [command]

启动容器静默：docker run -d hello-world

给容器命名：docker run --name hello hello-world



管理镜像：

docker images

docker rmi ubuntu

docker <subcommand> <image name>|<id>

docker pull ubuntu

docker push ubuntu



管理容器

docker ps [-a]

docker rm 容器id或容器名

docker <subcommand> <container name>|<id>

Docker logs 容器名

Docker stop 容器名

docker start 容器名



镜像仓库

官方镜像的格式：<repository>:<tag>

私人镜像的格式：<docker ID>/<repository>:<tag>

镜像名的使用变体：

docker run mysql（不加默认是最新版）

docker run mysql:latest

docker run mysql:5.7

docker run kobel9881208/mysql:5.7



安装MySQL的Docker命令

docker run mysql:5.7

设置root密码

docker run -e MYSQL_ROOT_PASSWORD=1234 mysql:5.7

端口映射

docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 mysql:5.7

后台运行

docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 mysql:5.7

设置容器名

docker run --name mysql  -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 mysql:5.7



持久化存储

提供独立于容器之外的持久化存储，有两种方式：Bind Mounting和Data Volume



Bind Mounting：将主机上指定的目标挂载到容器

docker run --name mysql  -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -v $PWD/data:/var/lib/mysql mysql:5.7



查看docker全局信息

docker system info

docker system df



清理

Docker container prune  #删除所有退出状态的容器

docker volume prune		#删除未被使用的数据卷

Docker image prune		#删除dangling或所有未被使用的镜像



tldr docker常用命令展示





Dockerfile的基本使用

如何构建自己的Docker镜像

1. 定义Dockerfile文件
2. 运行docker build命令



 Dockerfile

#使用JDK8环境作为基础镜像

FROM java:8

#拷贝jar包

COPY build/libs/docker-file-demo-0.0.1-SNAPSHOT.jar app.jar[容器内的路径]

#容器启动时要执行的命令

ENTERPOINT ["java", "-jar", "/app.jar"]

#暴露端口

EXPOSE 8080



./gradlew clean build

docker build -t docker-file-demo:1.0 .

docker images

docker run --name docker-file-demo -d =p 8080:8080 docker-file-demo:1.0





需要部署到其他机器时，我们应该怎么做？

推送镜像到Docker Hub

重标记镜像

docker tag spring-docker:1.0 kobel19881208/docker-file-demo:1.0



多容器应用

使用Docker Compose多容器应用

docker-compose.yml

docker-compose up

docker-compose down



docker-compose.yml

```
version:'3'

services:
	app:
		build: .
		image:app:1.0
		container_name:app
		ports:
		- '8080:8080'
		depends_on:
			-mysql
	mysql:
		image:mysql:5.7
		container_name:mysql
		environment:
			MYSQL_DATABASE:'demo'
			MYSQL_ROOT_PASSWORD:'root'
		ports:
			-'3306:3306'
		volumes:
			-$PWD/data:/var/lib/mysql
```



docker-compose ps



docker compose常用命令

启动命令

docker-compose up -d

构建镜像

docker-compose build

停止并删除应用

docker-compose down

查看应用到容器

docker-compose ps

查看服务的日志

docker-compose logs mysql





清缓存

docker system prune --volumes
