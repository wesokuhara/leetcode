import java.util.*;

class Solution {
  public List<Integer> topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int n: nums){
      map.put(n, map.getOrDefault(n, 0) + 1);
    }

    PriorityQueue<Map.Entry<Integer, Integer>> maxHeap = new PriorityQueue<>((a, b) -> (b.getValue() - a.getValue()));
    for (Map.Entry<Integer, Integer> entry: map.entrySet()){
      maxHeap.add(entry);
    }

    List<Integer> res = new ArrayList<>();
    for (int i = 0; i < k; i++) {
      int num = maxHeap.poll().getKey();
      res.add(num);
    }
    return res;
  }
}
