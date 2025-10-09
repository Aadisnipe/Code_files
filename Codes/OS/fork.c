#include <stdio.h>
#include <unistd.h> // helps in system calls   unix Standard Header

int main() {
	//pid_t stores process id
    pid_t pid = fork();  //creates a new process (a child) that is a copy of the current program.
    //for child process pid is 0
    //for parent process pid give child id

    if (pid == 0) {
        printf("I am the child! My PID is %d\n", getpid());
        //getpid() gives current process id
    } else {
        printf("I am the parent! My PID is %d and my child’s PID is %d\n", getpid(), pid);
    }
    return 0;
}
