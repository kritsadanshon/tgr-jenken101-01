# Use custom workspace
```
Directory: workspace/01-Unittest
```

# Build Triggers
```
Projects to watch: 02-Build Container Image
```

# Execute shell
```
[ -z $(docker -H=10.148.15.193:2375 ps -aq) ] &&  echo "Container 0 running..."  || docker -H=10.148.15.193:2375 stop $(docker -H=10.148.15.193:2375 ps -aq)

[ -z $(docker -H=10.148.15.193:2375 ps -aq) ] &&  echo "Container 0 running..."  || docker -H=10.148.15.193:2375 rm $(docker -H=10.148.15.193:2375 ps -aq)

docker -H=10.148.15.193:2375 pull dockertgr/kritsadanshons-app:development

docker -H=10.148.15.193:2375 run -it -d -p 80:3000 dockertgr/kritsadanshons-app:development
```
