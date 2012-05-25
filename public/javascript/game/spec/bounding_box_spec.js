//This bounding box is based on top-left being 0,0 and x and y increase as you
//go towards the bottom right
describe("BoundingBox", function() {
  var bb;

  beforeEach(function() {
    bb = new BoundingBox(10, 20, 30, 40);
  });

  describe("left", function() {
    it("should return x", function() {
      expect(bb.left()).toBe(10);
    });
  });

  describe("right", function() {
    it("should return the width offset by x", function() {
      expect(bb.right()).toBe(40);
    });
  });

  describe("top", function() {
    it("should return y", function() {
      expect(bb.top()).toBe(20);
    });
  });

  describe("bottom", function() {
    it("should return the height offset by y", function() {
      expect(bb.bottom()).toBe(60);
    });
  });

  describe("collision detection", function() {
    var box_overlapping;
    var box_not_overlapping;

    beforeEach(function() {
      box_overlapping = new BoundingBox(10, 20, 30, 40);
      box_not_overlapping = new BoundingBox(1, 2, 3, 4);
    });

    it("should not detect a collision with itself", function() {
      expect(bb.is_colliding_with(bb)).toBeFalsy();
    });

    it("should detect a collision with an overlapping box", function() {
      expect(bb.is_colliding_with(box_overlapping)).toBeTruthy();
    });

    it("should not detect a collision with boxes that is not overlapping", function() {
      expect(bb.is_colliding_with(box_not_overlapping)).toBeFalsy();
    });
  });
});