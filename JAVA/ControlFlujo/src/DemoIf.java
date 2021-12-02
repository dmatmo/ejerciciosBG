import java.util.Scanner;

public class DemoIf {

    public static void main(String[] args) {

        boolean isMoving = (new Scanner(System.in)).nextBoolean();

        if(isMoving) {
            System.out.println("Moving...");
        } else {
            System.out.println("otra cosa");
        }

    System.out.println("Escribe la calificación:  ");
    int testScore = (new Scanner(System.in)).nextInt();
    char grade;

    if(testScore >= 90){
        grade = 'A';
    } else if (testScore >=80){
        grade = 'B';
    } else if (testScore >=70){
        grade = 'C';
    } else if (testScore >=60){
        grade = 'D';
    } else{
        grade = 'F';
    }//else

    System.out.println("Grade = " + grade);

}//Class Demo
