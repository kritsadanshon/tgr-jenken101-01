#  Install Jenkins - 1
```
# Add apt-key
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

# Update sources.list with "deb https://pkg.jenkins.io/debian-stable binary/"
sudo nano /etc/apt/sources.list

# Update apt-get and install jenkin
sudo apt-get update
sudo apt-get install -y jenkins
sudo usermod -aG docker jenkins

# Reboot server
sudo reboot
```

#  Install Jenkins - 2
```
# Download jenkins.war
sudo wget http://mirrors.jenkins.io/war-stable/2.235.3/jenkins.war​

# Move jenkins.war to /opt
sudo mv jenkins.war /opt​

# Run jenkins.war
java -jar jenkins.war

```


#  Install Nodejs, Java and docker
```
# Prepare node source
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Update apt-get and install java and nodejs
sudo apt-get update
sudo apt install -y openjdk-8-jdk nodejs

# Update sources.list
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# Update apt-get and install docker
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Add user to docker user group
sudo usermod -aG docker $USER

```
