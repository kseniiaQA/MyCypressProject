## to start docker container with tests copy a directory: 
//



## then go to a directory (cd...) and run a command:




### pull a docker image 
## docker pull cypress/included:10.3.1


## then we run this image  in interactive mode 

###  docker run -it --entrypoint=cypress cypress/included:10.3.1 info


### then we execute an image for container 
## docker run -it -v $(pwd):/Attest_project -w /Attest_project cypress/included:10.3.1 --spec cypress/e2e/spec.cy.js --browser chrome

  

