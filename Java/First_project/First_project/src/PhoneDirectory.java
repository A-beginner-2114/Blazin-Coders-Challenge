
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import javax.swing.*;
import Sum.Sum1;

public class PhoneDirectory {

    public static void main(String[] args) {
        int choice = 1;
        List<String> names = new ArrayList<String>();
        List<String> numbers = new ArrayList<String>();
        List<String> country = new ArrayList<String>();
        while (choice != 3) {
            System.out.println("---------------------\n        MENU        \n---------------------");
            System.out.println(("1.Add details\n2.Remove\n3.Exit\n---------------------\n"));
            System.out.print("Enter your choice\t:");
            Scanner input = new Scanner(System.in);
            String Choice = input.nextLine();
            choice = Integer.parseInt(Choice);
            if (choice == 1) {
                System.out.print("Name\t\t\t:");
                String name = input.nextLine();
                names.add(name);
                System.out.print("Number\t\t\t:");
                String num = input.nextLine();
                numbers.add(num);
                System.out.print("Country\t\t\t:");
                String code = input.nextLine();
                country.add(code);

            }

            if (choice == 2) {
                boolean IsEmpty = names.isEmpty();
                if (IsEmpty) {
                    System.out.println("No Entries in Phone Directory");
                    continue;
                } else {
                    System.out.print("\nEnter the row to be removed:");
                    String index = input.nextLine();
                    int Index = Integer.parseInt(index);
                    names.remove(Index - 1);
                    numbers.remove(Index - 1);
                }
            }
            System.out.println("\n\n\nS.no\t\tName\t\tCountry\t\tNumber");
            for (int j = 0; j < (names.size()); j++) {
                System.out.println((j + 1) + "\t\t" + names.get(j) + "\t\t" + country.get(j) + "\t\t" + numbers.get(j));
            }
            System.out.println("\n\n\n");

        }
        if (choice == 3) {
            System.out.println("\n\tClosed Phone Directory\n\n");
        }

    }

}