import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Distance {
        public static void main(String[] args) {
                List<ArrayList<Double>> Cities = new ArrayList<>();
                ArrayList<Double> London = new ArrayList<Double>();
                ArrayList<Double> SKorea = new ArrayList<Double>();
                ArrayList<Double> India = new ArrayList<Double>();
                ArrayList<Double> Germany = new ArrayList<Double>();
                ArrayList<Double> LasVegas = new ArrayList<Double>();
                ArrayList<Double> Brazil = new ArrayList<Double>();
                ArrayList<Double> NewYork = new ArrayList<Double>();
                ArrayList<Double> France = new ArrayList<Double>();
                London.add(51.509865);
                London.add(-0.118092);
                SKorea.add(37.532600);
                SKorea.add(127.024612);
                India.add(20.593684);
                India.add(78.96288);
                Germany.add(52.520008);
                Germany.add(13.404954);
                LasVegas.add(36.114647);
                LasVegas.add(-115.172813);
                Brazil.add(-23.53377300);
                Brazil.add(-46.625290);
                NewYork.add(43.000000);
                NewYork.add(-75.0000000);
                France.add(2.349014);
                France.add(48.864716);
                Cities.add(London);
                Cities.add(SKorea);
                Cities.add(India);
                Cities.add(Germany);
                Cities.add(LasVegas);
                Cities.add(Brazil);
                Cities.add(NewYork);
                Cities.add(France);
                Scanner input = new Scanner(System.in);
                System.out.println(
                                "\n1. London\n2. South Korea\n3. India\n4. Germany\n5. Las Vegas\n6. Brazil\n7. New York\n8. France\n\nEnter the choice to find the distance");
                int index1 = input.nextInt();
                int index2 = input.nextInt();
                List City1 = Cities.get(index1 - 1);
                List City2 = Cities.get(index2 - 1);
                Double x1 = (Double) City1.get(0);
                Double y1 = (Double) City1.get(1);
                Double x2 = (Double) City2.get(0);
                Double y2 = (Double) City2.get(1);
                Double x = x2 - x1;
                Double y = y2 - y1;
                Double distance = (Math.sqrt((x * x) + (y * y))) * 111;
                System.out.println("\nThe distance between those cites is " + distance + "km");
                Double travel_by_car = distance * 5;
                Double travel_by_train = distance * (0.5);
                Double travel_by_air = distance * 15;
                System.out.println(
                                "\nThe cost of travel by\n\t\tCar\t: Rs." + travel_by_car + "\n\t\tTrain\t: Rs."
                                                + travel_by_train
                                                + "\n\t\tAir\t: Rs." + travel_by_air);
        }
}