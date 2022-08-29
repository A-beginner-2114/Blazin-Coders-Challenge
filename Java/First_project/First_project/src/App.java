
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class App {
    public static void main(String args[]) {
        String answer1 = "Sherlock";
        String answer2 = "sherlock";
        Scanner input = new Scanner(System.in);
        List<String> hints = Arrays.asList(new String[] { "He has multicolored eye", "He wears a Belstaff and Scarf",
                "He is very annoying", "He has a loyal friend", "His brother is the British Government",
                "He is so cold and childish" });
        for (int i = 7; i >= 0; i--) {
            System.out.println("\n\nYou got " + i + " chances left");
            if (i == 0) {
                System.out.println("The charachter is Sherlock, You dumb shit");
                break;
            }
            System.out.print("\nGuess the intelligent fictional charachter:");
            String guess = input.nextLine();
            if (guess.equals(answer1) || guess.equals(answer2)) {
                System.out.println("You are Brilliant");
                break;
            }
            if (i != 1) {
                if (guess != answer1 && guess != answer2) {
                    String element = hints.get(i - 2);
                    System.out.println("Hint: " + element);
                    System.out.println("Use this Hint and try again");
                }
            }
        }
    }
}