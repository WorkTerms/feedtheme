import math

class Polygons:
    """ This is the superclass."""

    def number_of_sides(self):
        return 0

    def area(self):
        return 0

    def perimeter(self):
        return 0


class Triangle(Polygons):
    """ Models the properties of a triangle """

    def number_of_sides(self):
        return 3

    def area(self, base, height):
        return 1 / 2 * base * height

    def perimeter(self, a, b, c):
        if a + b > c:
            return a + b + c
        else:
            return "Invalid input: make sure a + b > c"

    def herons_formula(self, a, b, c):
        """ Alternative to finding area of triangle. """
        # s = semi perimeter
        s = (a + b + c) / 2
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return area


class Rhombus(Polygons):
    """" Models the properties of a Rhombus."""

    def number_of_sides(self):
        return 4

    def area(self, p, q):
        """ p is a Diagonal and q is a Diagonal.
        The formula is A = p*q/2. """
        return p * q / 2

    def perimeter(self, a):
        return 4 * a


class Pentagon(Polygons):
    """ Models the properties of a regular Pentagon. """

    def number_of_sides(self):
        return 5

    def area(self, a):
        """ This is area of regular pentagon"""
        return 1 / 4 * math.sqrt(5 * (5 + 2 * math.sqrt(5))) * a ** 2

    def perimeter(self, a):
        return 5 * a


class Hexagon(Polygons):
    """ Models the properties of a regular Hexagon. """

    def number_of_sides(self):
        return 6

    def area(self, a):
        """ Models area of a regular hexagon."""
        return (3 * math.sqrt(3) / 2) * a ** 2

    def perimeter(self, a):
        return 6 * a


class Heptagon(Polygons):
    """ Models the properties of a regular Heptagon. """

    def number_of_sides(self):
        return 7

    def area(self, a):
        """ Area for regular heptagon. """
        # convert degrees into radians.
        deg = 180 * math.pi / 180

        return (7 / 4 * a ** 2) * 1 / math.tan(deg / 7)

    def perimeter(self, a):
        return 7 * a


class Octagon(Polygons):
    """ Models the properties of a regular Octagon. """

    def number_of_sides(self):
        return 8

    """" Area of regular Octagon. """

    def area(self, a):
        return 2 * (1 + math.sqrt(2)) * a ** 2

    def perimeter(self, a):
        return 8 * a


class Nonagon(Polygons):
    """" Models the properties of a regular Nonagon. """

    def number_of_sides(self):
        return 9

    def area(self, a):
        """ Models area of a regular Nonagon. """
        # Python expects radians, so convert 180 to radians
        deg = 180 * math.pi / 180
        return 9 / 4 * a ** 2 * 1 / math.tan(deg / 9)

    def perimeter(self, a):
        return 9 * a


class Decagon(Polygons):
    """" Models the properties of a regular Decagon. """

    def number_of_sides(self):
        return 10

    """ Area of a regular Decagon. """

    def area(self, a):
        return 5 / 2 * a ** 2 * math.sqrt(5 + 2 * math.sqrt(5))

    def perimeter(self, a):
        return 10 * a


# Below is some test cases.

tri = Triangle()
print("Triangle Area:", tri.area(5, 10))
print("Herons formula:", tri.herons_formula(5, 4, 3))
print("Perimeter:", tri.perimeter(20, 71, 90))
print("-----------------")

rho = Rhombus()
print("Rhombus Area:", rho.area(12.3, 83.9))
print("Perimeter:", rho.perimeter(5))
print("-----------------")

pent = Pentagon()
print("Pentagon Area:", pent.area(5))
print("Perimeter:", pent.perimeter(7.5))
print("-----------------")

hex = Hexagon()
print("Hexagon Area:", hex.area(5))
print("Perimeter:", hex.perimeter(11.25))
print("-----------------")

hep = Heptagon()
print("Heptagon Area:", hep.area(10))
print("Perimeter:", hep.perimeter(8))
print("-----------------")

oct = Octagon()
print("Octagon Area:", oct.area(10))
print("Perimeter:", oct.perimeter(7))
print("-----------------")

non = Nonagon()
print("Nonagon Area:", non.area(6))
print("Perimeter", non.perimeter(5))
print("-----------------")

dec = Decagon()
print("Decagon Area:", dec.area(10))
print(dec.perimeter(11.25))


