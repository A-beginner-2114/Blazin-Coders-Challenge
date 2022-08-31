import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class CakeShop {
    // creating a method to display menu
    static void DisplayMenu(List Menu) {
        System.out.println("\n------------------------------------");
        System.out.println("\n\t\tMENU\n------------------------------------");
        for (int i = 1; i <= Menu.size(); i++) {
            System.out.println(i + ". " + Menu.get(i - 1) + " Cake");
        }
        System.out.println("\n------------------------------------");
    }

    // creating a method to display cart
    static void ShowCart(List<String> Cart) {
        System.out.println("\n------------------------------------");
        System.out.println("\n\t\tCART\n------------------------------------");
        for (int i = 1; i <= Cart.size(); i++) {
            System.out.println(i + ". " + Cart.get(i - 1) + " Cake");
        }
        System.out.println("\n------------------------------------");
    }

    // method to place order
    static void PlaceOrder(List<String> Cart) {
        ShowCart(Cart);
        System.out.print("Are you sure to buy all these cakes?\n(Yes/No)");
        Scanner input = new Scanner(System.in);
        String C = input.nextLine();
        if (C.equals("Yes") || C.equals("yes")) {
            int bill = Cart.size() * 96;
            System.out.println("Placed order\n Your bill amout:" + bill);
            Cart.removeAll(Cart);
        } else {
            System.out.println("Cancelled placing order");
        }

    }

    public static void main(String[] args) {
        List<String> MenuCard = new ArrayList<>();
        Collections.addAll(MenuCard, "Blueberry", "Brownie", "Saffron", "White Flaky", "Strawberry", "Mango Falvored",
                "Vannila Truffle", "Choco Chip", "Hazelnut Chocolate", "Black Forest", "Oreo Crunchy", "White Forest",
                "Chocolate", "Red Velvet", "Casata Mix", "creamless", "Loaded Chocolate", "Kit-Kat",
                "Chocolate Vanilla", "Cracker Nuts");
        List<String> CART = new ArrayList<>();
        int choice = 1;
        while (choice != 5) {
            System.out.println("\n1. View Menu\n2. Add to cart\n3. Show Cart\n4. Place Order\n5. Exit");
            Scanner input = new Scanner(System.in);
            System.out.print("\nEnter your choice : ");
            choice = input.nextInt();
            if (choice == 1) {
                DisplayMenu(MenuCard);
            }
            if (choice == 2) {
                System.out.println("");
                DisplayMenu(MenuCard);
                System.out.print("Enter the S.no of the item to be added : ");
                int sno = input.nextInt();
                String item = MenuCard.get(sno - 1);
                CART.add(item);
                System.out.println("\n\t\tAdded to cart :)");
            }
            if (choice == 3) {
                ShowCart(CART);
            }
            if (choice == 4) {
                PlaceOrder(CART);
            }
        }
    }

}