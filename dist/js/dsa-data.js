/**
 * DSA Visualizer - DSA Preparation Backend (v2.1)
 * Stores explanations and categoried interview questions for standard DSA topics.
 */

const dsaDatabase = {
    // --- Data Structures ---
    "arrays": {
        title: "Arrays",
        short: "• Collection of elements stored in contiguous memory cells.<br>• Offers O(1) constant time access using the index.<br>• Physical size is usually fixed at creation (static arrays).<br>• Insertions/Deletions at middle/start take O(N) time.<br>• Highly cache-friendly due to spatial locality of data.<br>• Minimal memory overhead as no pointers are required.",
        elaborative: "• <b>Memory Layout:</b> Elements are stored in one single block of memory, allowing the CPU to fetch them efficiently.<br>• <b>Random Access:</b> The memory address of any element can be calculated using <code>base_addr + index * size</code>.<br>• <b>Homogeneity:</b> Traditional arrays store elements of the same type, ensuring uniform size across all cells.<br>• <b>Insertion Cost:</b> Inserting at index 0 requires shifting all existing N elements to the right, making it expensive.<br>• <b>Deletion Cost:</b> Removing an element leaves a hole, necessitating a shift of subsequent elements to maintain continuity.<br>• <b>Fixed vs Dynamic:</b> Modern languages use Dynamic Arrays (ArrayList/Vectors) that double in size when full.<br>• <b>Capacity vs Size:</b> Capacity is the total space reserved, while size is the number of actual elements stored.<br>• <b>Best Use Case:</b> Ideal for scenarios where frequent lookups are required and the dataset size is known.<br>• <b>Limitation:</b> Finding an element by value (unsorted) takes linear O(N) time.<br>• <b>Multidimensional:</b> Arrays can represent grids (2D) or cubes (3D) by mapping indices to linear memory.",
        basic: "Find the maximum and minimum element in an array.",
        basicSolution: "<b>Algorithm:</b> Initialize <code>min</code> and <code>max</code> with the first element. Iterate through the array once. If an element is smaller than <code>min</code>, update <code>min</code>. If larger than <code>max</code>, update <code>max</code>. <br><b>Complexity:</b> O(N) time with O(1) extra space.",
        nextLevel: "Find the 'Kth' largest element in an array using a QuickSelect or Min-Heap.",
        mediumSolution: "<b>Algorithm:</b> Use a Min-Heap of size K. Iterate through the array; if the current element is larger than the heap's root, replace the root and re-heapify. After the loop, the root of the heap is the Kth largest element. <br><b>Complexity:</b> O(N log K) time and O(K) space."
    },
    "linked list": {
        title: "Linked Lists",
        short: "• Consists of nodes containing data and a reference pointer.<br>• Elements are non-contiguous and scattered in memory.<br>• Dynamic size allows growth without expensive reallocations.<br>• O(1) insertion/deletion if the pointer to the node is known.<br>• Sequential access only; random access is O(N) time.<br>• Higher memory usage due to storage of pointer addresses.",
        elaborative: "• <b>Node Structure:</b> Each node is an object on the heap containing 'data' and a 'next' address field.<br>• <b>No Pre-allocation:</b> Memory is allocated only when a new node is created, preventing wasted space.<br>• <b>Singly vs Doubly:</b> Doubly lists allow O(1) reverse traversal but use even more memory per node.<br>• <b>Circular Lists:</b> The last node points back to the head, useful for buffers and turn-based games.<br>• <b>Heap vs Stack:</b> Nodes are dynamically allocated on the heap, unlike array elements which are often contiguous.<br>• <b>No Shifting:</b> Inserting a node between A and B only requires updating A.next and New.next.<br>• <b>Cache Misses:</b> Because nodes are non-contiguous, they often cause CPU cache misses, making them slower than arrays.<br>• <b>Search Complexity:</b> To find the Kth element, you must traverse K-1 nodes starting from the head.<br>• <b>Use Case:</b> Excellent for implementing Stacks, Queues, and handling frequent insertions/deletions.<br>• <b>Sentinel Nodes:</b> Dummy head/tail nodes are often used to simplify edge case logic in algorithms.",
        basic: "Reverse a Singly Linked List (Iterative & Recursive).",
        basicSolution: "<b>Iterative Strategy:</b> Use three pointers (<code>prev</code>, <code>curr</code>, <code>next</code>). In each step, capture <code>curr.next</code>, flip <code>curr.next</code> to point to <code>prev</code>, move <code>prev</code> to <code>curr</code>, and <code>curr</code> to its original <code>next</code>. <br><b>Return:</b> The <code>prev</code> pointer as the new head.",
        nextLevel: "Detect and remove a cycle in a linked list using Floyd's Wall-and-Hare algorithm.",
        mediumSolution: "<b>Cycle Detection:</b> Use two pointers, <code>slow</code> (1 step) and <code>fast</code> (2 steps). If they meet, a cycle exists. <br><b>Removal:</b> Reset <code>slow</code> to head. Move both pointers 1 step at a time; their meeting point is the start of the cycle. Update the node pointing to it to <code>null</code>."
    },
    "stack": {
        title: "Stacks (LIFO)",
        short: "• Linear data structure following Last-In-First-Out principle.<br>• All additions and removals occur at one end (the Top).<br>• Provides O(1) constant time for push, pop, and peek operations.<br>• Essential for managing recursive function calls and undo logic.<br>• Used in expression valuation (Infix to Postfix/Prefix conversion).<br>• Can be implemented using either arrays or linked lists.",
        elaborative: "• <b>Memory Access:</b> Access is restricted to the 'top' element only; no random access allowed.<br>• <b>Call Stack:</b> Used by JVM/OS to store return addresses and local variables during recursion.<br>• <b>Undo/Redo:</b> Every action is pushed onto a stack; 'Undo' pops the state to revert changes.<br>• <b>Grammar Parsing:</b> Compilers use stacks to verify balanced parentheses and syntax trees.<br>• <b>Backtracking:</b> Used in pathfinding to 'remember' paths and retreat when a dead end is hit.<br>• <b>Fixed vs Dynamic:</b> Array-based stacks have a capacity; list-based stacks are strictly dynamic.<br>• <b>Expression Evaluation:</b> Postfix notation is evaluated using a stack to store intermediate results.<br>• <b>Browser History:</b> The 'Back' button pops the current URL to navigate to the previous one.<br>• <b>Reverse Polish Notation:</b> Stacks are the primary engine for processing RPN mathematical logic.<br>• <b>Auxiliary Space:</b> Often used as temporary storage (O(N)) to solve complex array/list problems.",
        basic: "Check for balanced parentheses in an expression.",
        basicSolution: "<b>Logic:</b> Use a stack. When you see an opening bracket, <code>push</code> it. When you see a closing bracket, check if the stack top is the matching opening bracket. If yes, <code>pop</code>. If no or stack empty, expression is unbalanced. <br><b>Result:</b> Balanced if stack is empty at the end.",
        nextLevel: "Implement a 'Min Stack' that supports push, pop, top, and retrieving the minimum element in O(1) time.",
        mediumSolution: "<b>Strategy:</b> Maintain TWO stacks. One stores all elements, the other (Min-Stack) stores the current minimum at each state of the primary stack. When pushing/popping, update both stacks so the Min-Stack's <code>peek()</code> always returns the global minimum."
    },
    "queue": {
        title: "Queues (FIFO)",
        short: "• Sequential data structure following First-In-First-Out logic.<br>• Front handles removals; Rear (Tail) handles all additions.<br>• Operations (enqueue/dequeue) are optimized for O(1) constant time.<br>• Primary structure for task scheduling and asynchronous processing.<br>• Crucial component for Breadth-First Search (BFS) in trees/graphs.<br>• Prevents data overflow by acting as a temporary buffer.",
        elaborative: "• <b>Ordered Processing:</b> Ensures that the oldest data is always processed first.<br>• <b>Circular Queue:</b> Optimized array implementation that wraps 'rear' back to 'front' to save space.<br>• <b>Double-Ended Queue (Deque):</b> Allows insertions and deletions at both ends (Front/Back).<br>• <b>Priority Queue:</b> Items are dequeued based on priority value rather than arrival time.<br>• <b>Task Scheduling:</b> CPU uses queues (e.g., Round Robin) to manage multiple running processes.<br>• <b>IO Buffering:</b> Used in printers, disk drivers, and networking to handle speed differences.<br>• <b>BFS Traversal:</b> Queues store 'discovered' nodes yet to be explored, ensuring level-by-level search.<br>• <b>Message Brokers:</b> Systems like Kafka/RabbitMQ use queues to decouple microservices.<br>• <b>Waitlisting:</b> Real-world applications like ticket booking or call center hold systems.<br>• <b>Producer-Consumer:</b> Acts as a synchronization point between two threads of differing speeds.",
        basic: "Implement a Queue using two Stacks.",
        nextLevel: "Sliding Window Maximum problem using a Deque (Double-ended Queue)."
    },
    "trees": {
        title: "Tree Structures",
        short: "• Nonlinear hierarchical structure with a single root and multiple children.<br>• Represents parent-child relationships where no cycles are allowed.<br>• Offers O(log N) operations when the tree is properly balanced.<br>• Foundational for file systems, XML/HTML DOM, and organization charts.<br>• Each node consists of a data value and references to its children nodes.<br>• Leaves are the terminal nodes with no children in the structure.",
        elaborative: "• <b>Hierarchical Nature:</b> Data is organized in levels, starting from a single Root node.<br>• <b>Edge:</b> The link connecting two nodes, representing a directed relationship.<br>• <b>Degree:</b> The total number of children belonging to a specific node.<br>• <b>Height vs Depth:</b> Height is path to leaf; Depth is path from root.<br>• <b>Balanced Trees:</b> Maintain O(log N) performance by keeping subtree heights similar.<br>• <b>Skewed Trees:</b> Occur when every node has only one child, mimicking a linked list.<br>• <b>Ternary/N-ary Trees:</b> Nodes can have more than two children (unlike Binary Trees).<br>• <b>Subtrees:</b> Every child of a node can be viewed as the root of its own subtree.<br>• <b>Memory Layout:</b> Usually heap-allocated objects connected by reference pointers.<br>• <b>Applications:</b> Used in Decision Trees (AI), Folder structures, and syntax parsing.",
        basic: "Calculate the maximum height (depth) of a binary tree.",
        basicSolution: "<b>Recursive Strategy:</b> <br>1. Base Case: If the <code>node</code> is null, return 0. <br>2. Recursive Step: Calculate the height of the left subtree and the right subtree. <br>3. Combine: Return <code>1 + max(leftHeight, rightHeight)</code>. <br><b>Complexity:</b> O(N) since every node is visited exactly once.",
        nextLevel: "Check if a Binary Tree is 'Height Balanced' (difference of heights of subtrees is <= 1).",
        mediumSolution: "<b>Optimized Post-order DFS:</b> <br>Instead of calculating height for every node (O(N^2)), use a function that returns -1 if a subtree is unbalanced. <br>1. Root checks left and right subtrees. <br>2. If any returns -1 or <code>abs(leftHeight - rightHeight) > 1</code>, return -1. <br>3. Otherwise, return the actual height. <br>Balanced if final result is not -1."
    },
    "bst": {
        title: "Binary Search Tree (BST)",
        short: "• Binary tree where Left child < Root and Right child > Root.<br>• Allows for average-case O(log N) search, insert, and delete.<br>• In-order traversal always produces elements in sorted order.<br>• Does not allow duplicate nodes in the standard implementation.<br>• Efficiency depends entirely on the tree's height (balance).<br>• Foundation for more complex sets and mapping datasets.",
        elaborative: "• <b>Ordering Property:</b> For every node X, all nodes in Left(X) < X and all in Right(X) > X.<br>• <b>Search Logic:</b> Binary Search-like traversal where half the tree is ignored at each step.<br>• <b>Insertion:</b> Recursive process that finds the correct leaf position for a new value.<br>• <b>Deletion:</b> Complex logic involving three cases: No children, One child, or Two children.<br>• <b>Successor/Predecessor:</b> Smallest node in Right subtree or largest in Left subtree.<br>• <b>Height Degradation:</b> If nodes are inserted in sorted order, BST becomes a Linked List (O(N)).<br>• <b>Self-Balancing:</b> Trees like AVL and Red-Black use rotations to maintain O(log N) height.<br>• <b>Range Queries:</b> Very efficient at finding all items between values A and B.<br>• <b>Sorted Traversal:</b> In-order (L-V-R) is used by database indexes to fetch sorted data.<br>• <b>Complexity:</b> O(h) where h is height. Balanced: O(log N). Skewed: O(N).",
        basic: "Search for a target value in a BST.",
        nextLevel: "Find the 'Lowest Common Ancestor' (LCA) of two nodes in a BST."
    },
    "heap": {
        title: "Heaps",
        short: "• Complete binary tree used specifically for Priority Queues.<br>• Max-Heap: Root is always the largest element in the set.<br>• Min-Heap: Root is always the smallest element in the set.<br>• Provides O(1) access to min/max and O(log N) for updates.<br>• Implemented efficiently using a 1D array (index-based logic).<br>• Core engine for HeapSort and memory management logic.",
        elaborative: "• <b>Completeness:</b> Every level is filled before the next, and nodes are as far left as possible.<br>• <b>Heap Property:</b> Parent value always maintains a fixed relation to children (e.g., Parent >= Child).<br>• <b>Array Mapping:</b> Node at index <code>i</code> has children at <code>2i+1</code> and <code>2i+2</code>.<br>• <b>Heapify:</b> The process of restoring the heap property by bubbling nodes up or down.<br>• <b>Extract Max/Min:</b> Swaps the root with the last leaf, removes it, and heapifies down.<br>• <b>Build Heap:</b> O(N) linear time process to turn a random array into a valid heap.<br>• <b>Priority Queues:</b> Uses heaps to process tasks by importance rather than just time.<br>• <b>Dijkstra/Prim:</b> Uses Min-Heaps to quickly find the 'next closest' node in a graph.<br>• <b>Top-K Problems:</b> Identifying the largest 10 items in a billion-node stream using O(K) space.<br>• <b>Memory Management:</b> C++ 'new' keyword uses a 'Heap' area (though name only, often uses lists).",
        basic: "Implement Max-Heap 'Insert' and 'Extract-Max' operations.",
        nextLevel: "Merge K sorted arrays/lists using a Min-Heap efficiently."
    },
    "hashmap": {
        title: "HashMap / Hash Table",
        short: "Key-value pairs with O(1) average lookup using hashing functions.",
        elaborative: "A Hash Table maps 'Keys' to 'Values' using a <b>Hash Function</b>. It tries to provide O(1) average time complexity for insertion, lookup, and deletion.<br><br><b>Challenges:</b><br>• Collisions: Two keys hashing to the same index. Fixed using Chaining (linked list at index) or Open Addressing.<br>• Load Factor: When the table gets too full, it must resize (Rehashing) to prevent performance degradation.",
        basic: "Find the first non-repeating character in a string using a HashMap.",
        nextLevel: "Implement an 'LRU Cache' using a HashMap and Doubly Linked List."
    },
    "graph": {
        title: "Graphs",
        short: "• Collection of nodes (Vertices) and connections (Edges).<br>• Can represent non-hierarchical, complex networks.<br>• Used to model social maps, GPS routes, and neural nets.<br>• Representation via Adjacency Matrix or Adjacency List.<br>• Can be Directed, Undirected, Weighted, or Unweighted.<br>• Traversal involves BFS (Queue) and DFS (Stack/Recursion).",
        elaborative: "• <b>Components:</b> A graph G = (V, E) where V is the set of nodes and E is the set of connections.<br>• <b>Connectivity:</b> A graph can be connected (path exists between all nodes) or disconnected.<br>• <b>Cyclic vs Acyclic:</b> Cyclic graphs contain paths that return to the same vertex; Acyclic do not.<br>• <b>Degrees:</b> In-degree (edges entering) and Out-degree (edges leaving) a vertex.<br>• <b>Adjacency Matrix:</b> Fast O(1) edge lookup but expensive O(V²) memory usage.<br>• <b>Adjacency List:</b> Memory efficient O(V+E) but slower for specific edge checks.<br>• <b>Dijkstra's Algo:</b> Finds the shortest path in a weighted graph using a Greedy approach.<br>• <b>Topological Sort:</b> Only for Directed Acyclic Graphs (DAG), used in build systems.<br>• <b>Spanning Tree:</b> A subgraph that connects all nodes with no cycles and minimum edges.<br>• <b>Bipartite Graph:</b> A graph whose vertices can be divided into two independent sets.",
        basic: "Perform BFS and DFS traversals on a graph.",
        nextLevel: "Find the shortest path in a weighted graph using Dijkstra's Algorithm."
    },
    "trie": {
        title: "Tries (Prefix Tree)",
        short: "Special tree used for fast string retrieval and auto-complete features.",
        elaborative: "A Trie is a tree-like data structure used for efficient searching of strings (prefixes). Each node represents a character. A path from root to a node spells out a word.<br><br><b>Usage:</b> Great for Autocomplete, Spell Checkers, and IP Routing. searching a word of length 'L' takes O(L) time, regardless of how many millions of words are in the Trie.",
        basic: "Insert a word and check if a prefix exists in a Trie.",
        nextLevel: "Find the 'Shortest Unique Prefix' for every word in a given list."
    },
    "segment tree": {
        title: "Segment Trees",
        short: "Used for range queries (sum, min, max) in O(log N) time with updates.",
        elaborative: "A Segment Tree is a tree used for storing information about intervals or segments. It allows querying a range (e.g., 'What is the sum of items from index 5 to 500?') and updating values in O(log n) time. Without it, range queries would take O(n).",
        basic: "Range Sum Query with point updates.",
        nextLevel: "Implement 'Lazy Propagation' to handle Range Updates efficiently."
    },

    // --- Algorithms ---
    "sorting": {
        title: "Sorting Algorithms",
        short: "Ordering elements using various strategy: QuickSort, MergeSort, BubbleSort, etc.",
        elaborative: "Sorting is the process of arranging data in a particular order. <br><br><b>Categories:</b><br>• O(n²): Bubble, Insertion, Selection. Good for small data.<br>• O(n log n): MergeSort (stable, good for linked lists), QuickSort (fast in-place, average case), HeapSort (O(1) space).<br>• O(n): Counting Sort, Radix Sort (non-comparison based, restricted to integers).",
        basic: "Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).",
        nextLevel: "Find the 'Inversion Count' of an array using MergeSort logic."
    },
    "searching": {
        title: "Searching Algorithms",
        short: "Finding an element in a collection. Binary Search (O(log n)) vs Linear Search (O(n)).",
        elaborative: "Searching aims to find the location or existence of a target value.<br>• <b>Linear Search:</b> Checks every item. O(n).<br>• <b>Binary Search:</b> Divides a <b>Sorted</b> array in half every step. O(log n).<br>• <b>TERNARY Search:</b> Divides into three parts (O(log₃ n)). Used for unimodal functions.",
        basic: "Search for an element in a rotated sorted array.",
        nextLevel: "Find the 'Median' of two sorted arrays in O(log(min(m,n))) time."
    },
    "dp": {
        title: "Dynamic Programming (DP)",
        short: "• Optimization technique for solving overlapping subproblems.<br>• Converts exponential time recursive logic to polynomial time.<br>• Requires 'Optimal Substructure'—solution built from sub-solutions.<br>• Uses Memoization (Top-Down) or Tabulation (Bottom-Up).<br>• Saves intermediate results in a table to avoid redundant calculations.<br>• Essential for shortest paths, resource allocation, and LCS problems.",
        elaborative: "• <b>Principle of Optimality:</b> An optimal policy has the property that whatever the initial state, the remaining decisions must constitute an optimal policy.<br>• <b>Memoization:</b> Storing recursive results in a Map/Array to prevent re-solving 'seen' states.<br>• <b>Tabulation:</b> Iterative approach filling a table from smallest to largest subproblems.<br>• <b>Space Optimization:</b> Many DP problems only need the previous 1 or 2 rows/states (O(1) space).<br>• <b>LCS:</b> Finding the longest shared sequence between two strings in O(M*N) time.<br>• <b>Knapsack:</b> Balancing weight and value to find the most profitable item combination.<br>• <b>Bellman-Ford:</b> A DP-based graph algorithm that handles negative edge weights.<br>• <b>State Transition:</b> Defining the 'DP Equation' that relates subproblems (e.g., dp[i] = dp[i-1] + dp[i-2]).<br>• <b>DAG View:</b> DP can be viewed as finding the shortest/longest path in a state graph.<br>• <b>Trade-off:</b> Often trades memory (for the table) to gain significant execution speed.",
        basic: "Find the Nth Fibonacci number using DP (Tabulation/Memoization).",
        nextLevel: "Solve the 'Longest Common Subsequence' (LCS) of two strings."
    },
    "greedy": {
        title: "Greedy Algorithms",
        short: "• Algorithmic paradigm that makes locally optimal choices at each step.<br>• Never reconsiders its decisions (no backtracking allowed).<br>• Aims for a global optimum by choosing the 'best' immediate path.<br>• Computationally fast but doesn't guarantee a perfect solution for all.<br>• Successful for Min Spanning Trees, Huffman, and Dijkstra's.<br>• Best for optimization problems where greedy choice property holds.",
        elaborative: "• <b>Greedy Choice Property:</b> A global optimum can be reached by a series of local optima.<br>• <b>Optimal Substructure:</b> Optimal solution to the problem contains optimal solutions to subproblems.<br>• <b>No Undo:</b> Once a choice is made, it is permanent (unlike DP or Backtracking).<br>• <b>Dijkstra's:</b> Greedily picks the nearest vertex to expand the shortest path tree.<br>• <b>Huffman Coding:</b> Combines the two least frequent characters iteratively for compression.<br>• <b>Kruskal's/Prim's:</b> Greedily adds the cheapest available edge to the Spanning Tree.<br>• <b>Fractional Knapsack:</b> Achieves perfect solution by picking items based on density (Value/Weight).<br>• <b>Limitations:</b> Fails for problems like the 0/1 Knapsack where sorting by density isn't enough.<br>• <b>Proof of Correctness:</b> Often requires induction or contradiction (Exchange Argument) to prove.<br>• <b>Speed:</b> Usually O(N log N) due to initial sorting, making them faster than DP solutions.",
        basic: "Fractional Knapsack problem (Greedy) vs 0/1 Knapsack (DP).",
        nextLevel: "Job Sequencing with Deadlines problem."
    },
    "backtracking": {
        title: "Backtracking",
        short: "Recursive approach that explores all paths and 'backs up' when a path fails.",
        elaborative: "Backtracking is a systematic way to iterate through all possible configurations of a search space. It's an improvement over brute force because it 'prunes' paths that cannot lead to a valid solution. Used for N-Queens, Sudoku solvers, and Permutations.",
        basic: "Generate all possible permutations of a string.",
        nextLevel: "Solve the classic 'N-Queens' problem on an N x N chessboard."
    },
    "graph algorithms": {
        title: "Advanced Graph Algorithms",
        short: "BFS, DFS, Dijkstra, Bellman-Ford, Prim's, and Kruskal's.",
        elaborative: "Graph algorithms solve pathfinding and connectivity. <br>• <b>Dijkstra:</b> Shortest path in weighted graphs (Greedy).<br>• <b>Bellman-Ford:</b> Handles negative weights.<br>• <b>MST (Prim/Kruskal):</b> Connects all nodes with minimum total weight.",
        basic: "Detect a cycle in an Undirected Graph (using BFS or DFS).",
        nextLevel: "Find the shortest paths from a single source to all nodes (Bellman-Ford for negative weights)."
    },
    "string algorithms": {
        title: "String Algorithms",
        short: "KMP, Rabin-Karp, and Manacher's for pattern matching.",
        elaborative: "Pattern matching in strings is crucial for search engines. <br>• <b>KMP:</b> Uses a prefix table (LPS) to avoid re-scanning (O(n+m)).<br>• <b>Rabin-Karp:</b> Uses rolling hashes.<br>• <b>Z-Algorithm:</b> O(n+m) linear time pattern searching.",
        basic: "Check if one string is a rotation of another.",
        nextLevel: "Implement the 'KMP Algorithm' for pattern matching in linear time."
    },

    // --- Techniques ---
    "two pointers": {
        title: "Two Pointers Technique",
        short: "Using two indices to traverse an array/list simultaneously to optimize space and time.",
        elaborative: "This technique uses two pointers to scan data, usually reducing O(n²) problems to O(n). <br>• <b>Opposite ends:</b> Used for checking Palindromes or Two Sum in sorted arrays.<br>• <b>Fast & Slow:</b> Used for detecting cycles or finding the middle of a list.",
        basic: "Find the 'Two Sum' in a sorted array (Two Pointers approach).",
        nextLevel: "Find the 'Container with Most Water' using the shrinking window approach."
    },
    "sliding window": {
        title: "Sliding Window",
        short: "Maintaining a sub-array window while sliding it across the main array to find ranges.",
        elaborative: "A technique for reducing O(n²) subarray problems to O(n). You maintain a 'window' (start and end pointers) and slide it based on conditions. <br>• Fixed Window: Find max sum of 'K' elements.<br>• Variable Window: Longest substring without repeating characters.",
        basic: "Max sum of a contiguous subarray of size 'K'.",
        nextLevel: "Find the 'Smallest Window' in a string containing all characters of another string."
    },
    "divide & conquer": {
        title: "Divide & Conquer",
        short: "Divide into subproblems, solve them, and combine results. e.g. MergeSort.",
        elaborative: "D&C works by: <br>1. <b>Divide:</b> Breaking the problem into smaller similar parts.<br>2. <b>Conquer:</b> Solving them recursively.<br>3. <b>Combine:</b> Merging the solutions. <br>Used in Binary Search, MergeSort, QuickSort, and Strassen's matrix multiplication.",
        basic: "Calculate x raised to power n (Pow(x, n)) efficiently.",
        nextLevel: "Find the 'Median of Medians' (Worst-case linear time selection)."
    },
    "bit manipulation": {
        title: "Bit Manipulation",
        short: "Using binary operations (AND, OR, XOR, NOT) to solve problems with O(1) space.",
        elaborative: "Performing operations at the bit level is extremely fast and space-efficient. <br>• XOR: x ^ x = 0. Used for finding the 'unique' element in a pair-filled array.<br>• Shifting: x << 1 is multiplication by 2. x >> 1 is division by 2.",
        basic: "Count the number of set bits (1s) in an integer.",
        nextLevel: "Find the 'only non-repeating element' when every other element repeats twice."
    },
    "prefix sum": {
        title: "Prefix Sum",
        short: "Pre-calculating cumulative sums to answer range sum queries in O(1).",
        elaborative: "A prefix sum array stores `p[i] = a[0] + a[1] + ... + a[i]`. This allows you to find `Sum(L, R)` by simply calculating `p[R] - p[L-1]` in O(1) time after O(n) preprocessing.",
        basic: "Equilibrium Index of an array.",
        nextLevel: "Find the number of subarrays with a given sum K."
    },
    "dsu": {
        title: "Disjoint Set Union (DSU / Union-Find)",
        short: "Tracks elements partitioned into disjoint subsets. Efficient for connectivity queries.",
        elaborative: "DSU is a data structure that manages a set of elements partitioned into several non-overlapping (disjoint) subsets. <br><br><b>Core Operations:</b><br>• Find: Determine which subset an element is in.<br>• Union: Join two subsets into a single subset.<br><br><b>Optimizations:</b> Path Compression and Union by Rank/Size reduce the amortized time complexity to nearly O(1) (Inverse Ackermann function).",
        basic: "Detect a cycle in an undirected graph using Union-Find.",
        nextLevel: "Implement 'Kruskal's Algorithm' for Minimum Spanning Tree using DSU."
    },
    "topological sort": {
        title: "Topological Sort (DAG)",
        short: "Linear ordering of vertices such that for every directed edge uv, vertex u comes before v.",
        elaborative: "Used for scheduling tasks where certain tasks depend on others. Only possible for Directed Acyclic Graphs (DAGs). <br><br><b>Algorithms:</b><br>• Kahn's Algorithm (BFS based).<br>• DFS based approach.<br><br>If the graph has a cycle, topological sorting is impossible.",
        basic: "Find a valid task schedule given N tasks and their prerequisites.",
        basicSolution: "<b>Kahn's Algorithm (BFS):</b> <br>1. Calculate the indegree for every vertex. <br>2. Pick all vertices with indegree 0 and add them to a Queue. <br>3. While the Queue is not empty: <br>&nbsp;&nbsp;&nbsp;a. Pop vertex <code>u</code> and add it to the sort. <br>&nbsp;&nbsp;&nbsp;b. For every neighbor <code>v</code> of <code>u</code>, decrement its indegree. <br>&nbsp;&nbsp;&nbsp;c. If indegree of <code>v</code> becomes 0, add it to the Queue.",
        nextLevel: "All Topological Sorts of a given DAG.",
        mediumSolution: "<b>Backtracking Strategy:</b> <br>To find ALL sorts, use a modified Kahn's algorithm with DFS. Instead of picking any node with indegree 0, you must explore all available nodes with indegree 0 using recursion. Mark nodes as visited and 'backtrack' by restoring indegrees to explore other possible starting nodes."
    },
    "sliding window maximum": {
        title: "Sliding Window Maximum",
        short: "Finding the maximum element in every contiguous subarray of size K.",
        elaborative: "A common interview problem that can be solved in O(n) using a <b>Monotonic Queue</b> or Deque. It demonstrates efficient window sliding techniques and maintenance of order within a moving range.",
        basic: "Brute force solution with O(n*k) complexity.",
        nextLevel: "Optimized O(n) solution using a Deque (Double-ended Queue)."
    },
    "bitmasking": {
        title: "Bitmasking",
        short: "Using an integer to represent a subset of elements. Extremely useful in DP.",
        elaborative: "Each bit in the integer can represent a boolean value (e.g., 'is item i selected?'). This is common in problems with N small (N < 20), such as Traveling Salesperson Problem (TSP) or assigning tasks to workers efficiently.",
        basic: "Print all subsets of a given set using bitmasking.",
        nextLevel: "Solve the Traveling Salesperson Problem using DP with Bitmasking."
    },
    "fenwick tree": {
        title: "Fenwick Tree (Binary Indexed Tree)",
        short: "A data structure for efficient prefix sum calculations and updates in O(log N).",
        elaborative: "Similar to Segment Trees but easier to implement and uses less space. Great for cumulative frequency tables and range sum queries where updates are frequent.",
        basic: "Point Update and Prefix Sum Query in O(log N).",
        nextLevel: "Count inversions in an array using a Fenwick Tree."
    },
    "recursion": {
        title: "Recursion",
        short: "• Function calling itself to solve smaller instances of the same problem.<br>• Requires a Base Case to prevent infinite loops and stack overflow.<br>• Requires a Recursive Step that moves the state closer to the base case.<br>• Every call creates a new 'Activation Record' on the system call stack.<br>• Ideally paired with Memoization to optimize temporal complexity.<br>• Foundational concept for trees, graphs, and backtracking algorithms.",
        elaborative: "• <b>Self-Reference:</b> A mathematical approach where a solution depends on smaller instances of the same problem.<br>• <b>Activation Records:</b> Each call stores local variables and return addresses in a unique stack frame.<br>• <b>Base Case:</b> The condition where no further recursive calls are made, ending the chain.<br>• <b>Recursive Step:</b> The logic that breaks the main problem into manageable subproblems.<br>• <b>Stack Depth:</b> Limited by memory; exceeding this depth results in a 'Stack Overflow' error.<br>• <b>Tail Recursion:</b> A specific type where the recursive call is the last action, allowing optimization by compilers.<br>• <b>Tree Structure:</b> Recursive calls naturally form a tree-like structure (Recursion Tree) during execution.<br>• <b>Inductive Proofs:</b> Closely related to induction; if the base case and step work, the whole logic is sound.<br>• <b>Overhead:</b> Recursion uses more memory than iteration due to multiple stack frames.<br>• <b>Best Use:</b> Solving problems with inherent tree structures or when code elegance is prioritized over performance.",
        basic: "Calculate the Factorial of a number recursively.",
        nextLevel: "Solve the 'Tower of Hanoi' with N disks."
    },
    "hashing": {
        title: "Advanced Hashing Techniques",
        short: "Techniques to minimize collisions and handle large datasets efficiently.",
        elaborative: "Hashing is used in HashMaps, but also in Bloom Filters, Consistency Hashing (for distributed systems), and Cryptography. Understanding collision resolution (Open Addressing vs Chaining) is critical for performance tuning.",
        basic: "Implement a simple Hash Table with Chaining.",
        nextLevel: "Consistent Hashing for Load Balancing across multiple servers."
    },
    "binary tree traversals": {
        title: "Binary Tree Traversals",
        short: "In-order, Pre-order, Post-order, and Level-order searching techniques.",
        elaborative: "Understanding how to visit nodes is fundamental to solving tree problems. <br>• In-order: Left-Root-Right (Sorted for BST).<br>• Pre-order: Root-Left-Right (Cloning trees).<br>• Post-order: Left-Right-Root (Deleting trees/DP).<br>• Level-order: BFS using a Queue.",
        basic: "Perform recursive In-order, Pre-order, and Post-order traversals.",
        nextLevel: "Construct a binary tree from its In-order and Pre-order traversal sequences."
    },

    // --- New Topics Added ---
    "strings": {
        title: "Strings",
        short: "• Sequence of characters stored in contiguous memory cell blocks.<br>• Strings can be immutable or mutable depending on the runtime language.<br>• Essential for text processing and data parsing application logic.<br>• Typically implemented as character arrays with metadata attributes.<br>• Key operations include slicing, joining, and searching patterns.<br>• Time complexity for character access by index is O(1).",
        elaborative: "• <b>Immutability:</b> Modification often creates a new string object in heap memory.<br>• <b>String Pool:</b> Memory optimization technique to reuse identical string literals.<br>• <b>ASCII vs Unicode:</b> Encoding determines memory usage (1 byte vs 2+ bytes per char).<br>• <b>Pattern Matching:</b> Finding substrings efficiently using specialized search algorithms.<br>• <b>Buffer/Builder:</b> Mutable sequences used to avoid high reallocation costs during edits.<br>• <b>Serialization:</b> Converting objects to string format (JSON/XML) for transmission.<br>• <b>Trie Integration:</b> Strings are the primary data used for Prefix Trees (Tries).<br>• <b>Regex:</b> Powerful tool for complex pattern searching and data validation logic.<br>• <b>Null Termination:</b> C-style strings end with '\\0' to mark the end of data.<br>• <b>Memory Overhead:</b> Storing char arrays along with metadata like length and hash.",
        basic: "Reverse a string without using built-in library methods.",
        nextLevel: "Find the longest palindromic substring in a given string."
    },
    "mathematics": {
        title: "Mathematics for DSA",
        short: "• Deals with numbers, prime properties, and sequences.<br>• Foundational for cryptography and efficiency optimization techniques.<br>• Includes GCD, LCM, and modular arithmetic operations.<br>• Focuses on number theory and combinatorics principles.<br>• Helps in finding mathematical shortcuts to reduce O(N) tasks.<br>• Crucial for competitive programming and complex hashing logic.",
        elaborative: "• <b>Prime Numbers:</b> Fundamental for RSA encryption and hashing algorithms.<br>• <b>Sieve of Eratosthenes:</b> Efficient O(N log log N) way to find all primes up to N.<br>• <b>GCD (Euclidean Algo):</b> Finding greatest common divisor in logarithmic time.<br>• <b>Modular Arithmetic:</b> Handling large numbers by calculating remainders constantly.<br>• <b>Fast Exponentiation:</b> Calculating <code>a^b % m</code> in O(log b) time complexity.<br>• <b>Pigeonhole Principle:</b> Logical tool for proving existence in fixed sets.<br>• <b>Inclusion-Exclusion:</b> Counting elements in overlapping sets correctly using logic.<br>• <b>Catalan Numbers:</b> Used to count binary trees and valid parentheses paths.<br>• <b>Binomial Coefficients:</b> Calculating combinations <code>nCr</code> using Pascal's triangle.<br>• <b>Chinese Remainder Theorem:</b> Solving systems of simultaneous congruences.",
        basic: "Find the GCD and LCM of two provided numbers.",
        nextLevel: "Implement the Sieve of Eratosthenes to find all primes up to N."
    },
    "difference array": {
        title: "Difference Array",
        short: "• Auxiliary array for efficient range updates in O(1).<br>• Transforms range additions into two point updates on differences.<br>• Final array is recovered using prefix sums in O(N).<br>• Best for static arrays where range updates are numerous.<br>• Saves significant time compared to O(N) per range update.<br>• Often used in scheduling and coordinate compression problems.",
        elaborative: "• <b>Core Concept:</b> For array A, define D[i] = A[i] - A[i-1] for all indices.<br>• <b>Range Update:</b> Adding <code>x</code> to A[L..R] becomes <code>D[L] += x</code> and <code>D[R+1] -= x</code>.<br>• <b>Prefix Sum:</b> Recovering A[i] is just the prefix sum of D from 0 to i.<br>• <b>Point Update:</b> Less efficient than standard updates, requiring O(N) to view.<br>• <b>Memory:</b> Uses O(N) extra space for the difference values array.<br>• <b>2D Version:</b> Can be extended to 2D grids for O(1) rectangle updates.<br>• <b>Limitations:</b> Not suitable for frequent point queries between updates.<br>• <b>Coordinate Compression:</b> Often paired with this for large sparse ranges.<br>• <b>Applications:</b> Managing dynamic schedules or updating image pixels.<br>• <b>Efficiency:</b> Reduces total time for K updates and Q queries to O(N + K + Q).",
        basic: "Given an array, perform multiple range updates and print the final array.",
        nextLevel: "Corporate Flight Bookings problem (Range updates implementation logic)."
    },
    "hashset": {
        title: "HashSet",
        short: "• Unordered collection of unique elements with O(1) lookup.<br>• Built on top of Hash Table logic without key-value mapping.<br>• Automatically handles duplicates by ignoring re-inserts.<br>• Uses hashing to determine memory placement of items.<br>• Elements must have a reliable hash code implementation.<br>• Ideal for membership tests and duplicate detection logic.",
        elaborative: "• <b>Uniqueness:</b> Guarantees no two elements are identical based on <code>equals()</code>.<br>• <b>Null Handling:</b> Most implementations allow one null element in the set.<br>• <b>Collision Strategy:</b> Uses chaining or linear probing just like a HashMap.<br>• <b>Load Factor:</b> Resizes when capacity crosses a threshold (usually 0.75).<br>• <b>Set Operations:</b> Efficiently performs Union, Intersection, and Difference.<br>• <b>Insertion Cost:</b> Average O(1), worst-case O(N) during heavy collisions.<br>• <b>Order:</b> Does not maintain insertion order (use LinkedHashSet for order).<br>• <b>Memory Usage:</b> Slightly higher than arrays due to metadata and pointers.<br>• <b>Hashing:</b> Quality of the hash function determines the performance logic.<br>• <b>Use Case:</b> Finding unique elements in a stream or checking visited nodes.",
        basic: "Check if an array contains any duplicate elements in the set.",
        nextLevel: "Find the intersection of two unsorted arrays in O(N+M) time."
    },
    "singly linked list": {
        title: "Singly Linked List",
        short: "• Linear data structure where each node points to the next.<br>• Nodes are scattered in memory and connected via pointers.<br>• Dynamic size allows growth without reallocation bottlenecks.<br>• Random access is O(N) as you must traverse from head node.<br>• Efficient O(1) insertion/deletion at the start of the list.<br>• Minimal memory overhead per node structure (one pointer).",
        elaborative: "• <b>Node:</b> Consists of a data field and a next pointer reference.<br>• <b>Termination:</b> The last node in the list points to null (or 0 address).<br>• <b>Traversal:</b> Iterative or recursive methods moving through next pointers.<br>• <b>Memory:</b> Uses heap memory; less contiguous than arrays (cache-unfriendly).<br>• <b>Insertion:</b> Middle insertions require O(N) search and O(1) link change.<br>• <b>Deletion:</b> Removing a node requires finding its predecessor (O(N)).<br>• <b>Sentinel:</b> Often uses a dummy head to simplify edge cases in code.<br>• <b>Reversal:</b> Classic interview problem using three pointer variables logic.<br>• <b>Cycles:</b> Detection using Floyd's slow and fast pointer technique.<br>• <b>Best Use:</b> Implementing stacks/queues when size is highly unpredictable.",
        basic: "Print all elements of a singly linked list in order.",
        nextLevel: "Remove the N-th node from the end of a singly linked list."
    },
    "doubly linked list": {
        title: "Doubly Linked List",
        short: "• Nodes contain 'prev', 'data', and 'next' pointer fields.<br>• Supports bidirectional traversal (forward and backward).<br>• O(1) deletion if the pointer to the node is available.<br>• Uses more memory than singly lists (extra pointer per node).<br>• Useful for implementing complex buffers and LRU caches.<br>• Simplifies logic for removing the last node of a list structure.",
        elaborative: "• <b>Node overhead:</b> Each node stores two memory addresses (8-16 bytes extra).<br>• <b>Symmetry:</b> Allows moving from Tail to Head just as easily as Head to Tail.<br>• <b>Deletion Logic:</b> To delete node X, simple update <code>X.prev.next = X.next</code>.<br>• <b>Insertion Logic:</b> Requires updating four pointers instead of two for links.<br>• <b>Empty List Handling:</b> Often uses Sentinel (dummy) head and tail nodes.<br>• <b>Cache Performance:</b> Just like singly lists, suffers from spatial locality issues.<br>• <b>Browser History:</b> Classic example where back/forward buttons use DLL logic.<br>• <b>Music Playlists:</b> Used for previous/next song functionality in players.<br>• <b>Efficiency:</b> Better for frequent modifications at both ends of a list.<br>• <b>Complexity:</b> More error-prone due to the double pointer maintenance logic.",
        basic: "Reverse a Doubly Linked List nodes.",
        nextLevel: "Implement a basic browser history system with Back and Forward."
    },
    "circular linked list": {
        title: "Circular Linked List",
        short: "• Last node points back to the Head node instead of null.<br>• Can be traversed starting from any node without stopping.<br>• Used in round-robin scheduling and turn-based games.<br>• Prevents 'end of list' null pointer exceptions if handled.<br>• Can be singly circular or doubly circular in nature.<br>• Always forms a closed loop structure in system memory.",
        elaborative: "• <b>No End:</b> Traversal typically uses a <code>do-while</code> loop or checks against Head.<br>• <b>Memory Utility:</b> Efficient for repeated cycles within a dataset structure.<br>• <b>Insertion:</b> Requires a traversal to the tail to update the head link.<br>• <b> Josephus Problem:</b> Classic mathematical puzzle solved using circular lists.<br>• <b>Resource Allocation:</b> CPU scheduling (Round Robin) where processes cycle.<br>• <b>Buffering:</b> Used in media players for continuous playback loop mode.<br>• <b>Edge Cases:</b> Handling a list with only one node (it points to itself).<br>• <b>Space:</b> Same memory as standard lists, just uses the last pointer differently.<br>• <b>Stability:</b> Great for systems that shouldn't crash at the 'end' of data.<br>• <b>Traversal Risk:</b> Infinite loops are common if the exit condition is missing.",
        basic: "Check if a linked list is circular in nature.",
        nextLevel: "Implement a basic Round-Robin task scheduler algorithm."
    },
    "deque": {
        title: "Deque (Double-Ended Queue)",
        short: "• Queue variant allowing insertion/deletion at both ends.<br>• Combines the features of both a Stack and a Queue.<br>• Provides O(1) performance for head and tail operations.<br>• Used in sliding window problems and work-stealing algorithms.<br>• Can be implemented using Doubly Linked Lists or Circular Arrays.<br>• Extremely flexible for managing dynamic buffers and undo logs.",
        elaborative: "• <b>Operations:</b> addFirst, addLast, pollFirst, pollLast, peekFirst, peekLast.<br>• <b>Implementation:</b> Array-based is faster than LinkedList-based for deques.<br>• <b>Monotonic Deque:</b> Stores elements in sorted order to solve range queries.<br>• <b>Sliding Window:</b> Used to find max/min in O(N) by keeping relevant indices.<br>• <b>Work Stealing:</b> Thread pools use deques to allow threads to take tasks.<br>• <b>Space Complexity:</b> O(N) storage for the elements and pointer fields.<br>• <b>Resizing:</b> Array-based deques double in size occasionally for growth.<br>• <b>Random Access:</b> Accessing the 'middle' is usually O(N) time complexity.<br>• <b>Memory efficiency:</b> Better than stacks/queues when dual access is needed.<br>• <b>Palindrome Checker:</b> Easily implemented by comparing items from both ends.",
        basic: "Check if a string is a palindrome using a Deque structure.",
        nextLevel: "Solve the 'Sliding Window Maximum' problem using a Deque efficiently."
    },
    "priority queue": {
        title: "Priority Queue",
        short: "• Abstract data type where elements have associated priorities.<br>• Elements with higher priority are dequeued before lower ones.<br>• Typically implemented using a Binary Heap for efficiency.<br>• Standard operations (Insert, Extract) take O(log N) time.<br>• Used extensively in scheduling, simulation, and graph search.<br>• Peek operation allows seeing the highest priority in O(1).",
        elaborative: "• <b>Heap Engine:</b> Internally uses Min-Heap or Max-Heap to maintain the order.<br>• <b>Stability:</b> Elements with equal priority may be dequeued in any order.<br>• <b>Dynamic Priorities:</b> Priority can be changed (decrease-key), though not standard.<br>• <b>Dijkstra's Algo:</b> Core component for picking shortest-path candidate from heap.<br>• <b>Huffman Coding:</b> Used to repeatedly extract the two least frequent items.<br>• <b>Interrupt Handling:</b> OS handles hardware interrupts based on priority level.<br>• <b>K-way Merge:</b> Merging many sorted lists using a priority queue for roots.<br>• <b>Greedy Search:</b> A* and Best-First Search algorithms rely on priority queues.<br>• <b>Memory:</b> O(N) auxiliary space for storing the heap structure array.<br>• <b>Build Time:</b> Creating from an existing array takes O(N) linear time.",
        basic: "Find the 3rd largest element in a stream using a Priority Queue.",
        nextLevel: "Merge K sorted linked lists into one single sorted list efficiently."
    },
    "balanced trees": {
        title: "Balanced Trees",
        short: "• BSTs that keep their height low to ensure O(log N) operations.<br>• Prevent the 'skewed tree' problem where BST becomes O(N) depth.<br>• Achieved via rotations or re-coloring during insertions/deletions.<br>• Essential for database indexing and high-performance sets.<br>• Includes AVL trees, Red-Black trees, and Splay trees.<br>• Height is guaranteed to be proportional to log of node count.",
        elaborative: "• <b>Balance Factor:</b> Difference between left and right subtree heights.<br>• <b>Rotations:</b> Left and Right rotations rearrange pointers to fix balance.<br>• <b>AVL:</b> Strictly balanced (Factor <= 1), great for frequent lookups.<br>• <b>Red-Black:</b> Loosely balanced (Factor <= 2), faster for insertions/deletions.<br>• <b>Self-Optimization:</b> Splay trees move frequently accessed nodes to the root.<br>• <b>B-Trees:</b> Multi-way balanced trees used by databases for disk storage indexing.<br>• <b>Worst Case:</b> Operations like search/insert are strictly O(log N) performance.<br>• <b>Memory:</b> Extra bits (color) or bytes (height) stored per node for balancing.<br>• <b>Complexity:</b> Implementation logic is significantly harder than standard BST.<br>• <b>Rebalancing:</b> Triggered only after structural changes like insertions.",
        basic: "Explain the difference between Left and Right rotations in trees.",
        nextLevel: "Check if a given Binary Tree is height-balanced recursively."
    },
    "avl tree": {
        title: "AVL Tree",
        short: "• Strictly self-balancing BST with balance factor range [-1, 1].<br>• Every node stores its own height for quick balance checking.<br>• O(log N) guaranteed for Search, Insert, and Delete operations.<br>• Performs rotations (LL, RR, LR, RL) to restore balance.<br>• More expensive to maintain but faster to query than Red-Black.<br>• Named after its inventors Adelson-Velsky and Landis.",
        elaborative: "• <b>Balance Rule:</b> <code>|Height(Left) - Height(Right)| <= 1</code> for every node.<br>• <b>Query focus:</b> Ideal for applications where search is very frequent.<br>• <b>Insertion:</b> At most one rotation (fixed-node) is needed to balance the tree.<br>• <b>Deletion:</b> May require multiple rotations up to the root to fix balance.<br>• <b>Height Bound:</b> Max height is approx 1.44 times the log of N node count.<br>• <b>Space:</b> Requires integer space (height) per node for the balance check.<br>• <b>LL/RR:</b> Single rotations used when imbalance is on the same side.<br>• <b>LR/RL:</b> Double rotations used for zig-zag imbalances in the structure.<br>• <b>Comparison:</b> Stricter than Red-Black trees, leading to shallower search paths.<br>• <b>Implementation:</b> Node struct includes data, left, right, and height fields.",
        basic: "Insert a node and perform an LL rotation on an AVL tree node.",
        nextLevel: "Find the smallest possible number of nodes in an AVL tree of height H."
    },
    "red-black tree": {
        title: "Red-Black Tree",
        short: "• Loosely balanced BST ensuring O(log N) worst-case time.<br>• Each node is colored either Red or Black for balance.<br>• Root and Leaves (NIL) are always black in this structure.<br>• No two red nodes can be adjacent (no red-red conflicts).<br>• Faster for insertions/deletions than AVL trees in practice.<br>• Used in C++ STL (map/set) and Java TreeMap classes.",
        elaborative: "• <b>Rule 1:</b> Every node is either red or black in the tree.<br>• <b>Rule 2:</b> The root is always black.<br>• <b>Rule 3:</b> All leaves (NIL) are black markers.<br>• <b>Rule 4:</b> If a node is red, both its children must be black.<br>• <b>Rule 5:</b> Path from node to leaves has same number of black nodes.<br>• <b>Balance:</b> Longest path is at most twice as long as the shortest path.<br>• <b>Search:</b> Slightly slower than AVL because the tree can be deeper.<br>• <b>Updates:</b> Performs fewer rotations on average during modifications.<br>• <b>Memory:</b> Only requires 1-bit per node (color) for balance metadata.<br>• <b>Re-coloring:</b> Often avoids rotations by simply flipping colors of neighbors.",
        basic: "Explain the coloring rules of a Red-Black Tree in detail.",
        nextLevel: "Describe the insertion process for fixing Red-Red color conflicts."
    },
    "sparse table": {
        title: "Sparse Table",
        short: "• Data structure for Range Queries on immutable search arrays.<br>• O(N log N) preprocessing with O(1) query time for idempotent ops.<br>• Answers Range Minimum Query (RMQ) extremely fast after build.<br>• Based on power-of-two decompositions of ranges in the array.<br>• Cannot handle updates after the table is built (static data).<br>• Best for static range query problems in O(N log N) space.",
        elaborative: "• <b>Table Structure:</b> <code>ST[i][j]</code> stores result for range starting at <code>i</code> length <code>2^j</code>.<br>• <b>DP approach:</b> <code>ST[i][j] = min(ST[i][j-1], ST[i + 2^(j-1)][j-1])</code>.<br>• <b>Query Logic:</b> A range [L, R] is split into two overlapping power-of-two ranges.<br>• <b>Idempotency:</b> Works perfectly for Min, Max, and GCD where overlap is safe.<br>• <b>Sum Query:</b> For sums, it takes O(log N) as overlap is forbidden for sum.<br>• <b>Space:</b> Uses O(N log N) memory, making it heavy for huge datasets.<br>• <b>Precomputation:</b> Log values are pre-calculated to speed up query arithmetic.<br>• <b>Static Data:</b> If even one element changes, the entire table must be rebuilt.<br>• <b>LCA:</b> Can be used to find Lowest Common Ancestor in O(1) after prep.<br>• <b>Efficiency:</b> Unbeatable for RMQ when updates are not required at all.",
        basic: "Implement Range Minimum Query (RMQ) using a Sparse Table.",
        nextLevel: "Find LCA of two nodes using Sparse Table and DFS Euler Tour."
    },
    "bfs": {
        title: "BFS (Breadth-First Search)",
        short: "• Explores graph level by level, starting from a source node.<br>• Uses a Queue data structure to manage discovered nodes.<br>• Guarantees shortest path in unweighted graphs efficiently.<br>• Visits all reachable nodes in O(V + E) time complexity.<br>• Foundational for finding connectivity and cycle detection.<br>• Widely used in GPS routing and social network layers.",
        elaborative: "• <b>Level-Order:</b> Visits all neighbors at distance 1, then 2, then 3, and so on.<br>• <b>Visited Set:</b> Crucial to track seen nodes to avoid infinite cycles.<br>• <b>Shortest Path:</b> Finds the path with minimum number of edges (hops) traversal.<br>• <b>Memory:</b> High space usage O(V) to store the queue compared to DFS stack.<br>• <b>Bipartite:</b> Can be used to check if a graph is two-colorable efficiently.<br>• <b>Web Crawling:</b> Search engine bots often use BFS to index relevant pages.<br>• <b>Grid-based:</b> Ideal for pathfinding on 2D maps (lava, mazes, obstacles).<br>• <b>Multi-source BFS:</b> Starts from multiple source nodes simultaneously in sync.<br>• <b>Completeness:</b> Will find a solution if one exists in an infinite tree structure.<br>• <b>Implementation:</b> Push start to queue, loop, pop, visit neighbors, push new unvisited.",
        basic: "Print level order traversal of a directed graph structure.",
        nextLevel: "Find the shortest path in a 2D binary matrix maze solver."
    },
    "dfs": {
        title: "DFS (Depth-First Search)",
        short: "• Explores as far as possible along each branch before backtracking.<br>• Uses a Stack (explicit or recursive) for traversal management.<br>• Time complexity is O(V + E) where V=vertices, E=edges.<br>• Essential for topological sort and finding connected components.<br>• Lower memory footprint than BFS on deep, narrow graphs.<br>• Used to solve puzzles like Sudoku and searching file directories.",
        elaborative: "• <b>Recursive Nature:</b> Naturally implemented using recursion for better readability.<br>• <b>Backtracking:</b> Core engine for problems where multiple paths are tried out.<br>• <b>Path Discovery:</b> Finds 'some' path to the target, not necessarily the shortest.<br>• <b>Cycles:</b> Detected using discovery and finish times in directed graph search.<br>• <b>Tree Edges:</b> Classifies edges into tree, back, forward, and cross edges.<br>• <b>Connectivity:</b> Can find connected components in an undirected graph structure.<br>• <b>Articulations:</b> Tarjan's implementation uses DFS to find bridge edges.<br>• <b>Space:</b> O(H) where H is max depth; often much less than BFS O(V).<br>• <b>Exhaustive Search:</b> Perfect for state-space problems (e.g., Chess, Game AI logic).<br>• <b>Orderings:</b> Generates Pre-order and Post-order sequences of node visitations.",
        basic: "Implement DFS traversal recursively and iteratively on a graph object.",
        nextLevel: "Count the number of connected components in a disconnected graph."
    },
    "dijkstra": {
        title: "Dijkstra's Algorithm",
        short: "• Finds the shortest path from a source to all other nodes.<br>• Works on directed/undirected graphs with non-negative weights.<br>• Greedy strategy: always picks the nearest 'unvisited' vertex.<br>• Uses a Priority Queue (Min-Heap) to optimize to O(E log V).<br>• Foundational for Google Maps and modern routing protocols.<br>• Relies on the 'Relaxation' principle to update path estimates.",
        elaborative: "• <b>Weights Requirement:</b> Fails if negative edge weights are present (use Bellman).<br>• <b>Greedy Choice:</b> Once a node is 'settled', its shortest distance is final.<br>• <b>Relaxation:</b> <code>if (dist[u] + w < dist[v]) update dist[v]</code> algorithm logic.<br>• <b>Data Structures:</b> Requires an array for distances and a visited toggle set.<br>• <b>Complexity:</b> O(V^2) with Matrix, O(E log V) with Priority Queue heap storage.<br>• <b>Shortest Path Tree:</b> Can reconstruct paths using a 'parent' array tracker logic.<br>• <b>Early Exit:</b> Can stop once the target node is reached by the queue logic.<br>• <b>Applications:</b> Network routing (OSPF), GPS navigation, and flight paths.<br>• <b>Limitations:</b> Doesn't work for longest paths or negative weight cycles.<br>• <b>Comparison:</b> Faster than Bellman-Ford but less versatile with weights.",
        basic: "Find shortest path in a weighted graph from source Node A location.",
        nextLevel: "Solve the 'Network Delay Time' problem from LeetCode platform."
    },
    "bellman-ford": {
        title: "Bellman-Ford Algorithm",
        short: "• Computes shortest paths from a source to all nodes in any graph.<br>• Handles negative edge weights, unlike Dijkstra's algorithm logic.<br>• Detects 'negative weight cycles' that lead to infinite shortening.<br>• Time complexity is O(V * E)—slower than Dijkstra's approach logic.<br>• Essential for distance-vector routing protocols like RIP standard.<br>• Uses dynamic programming principles for iterative relaxation steps.",
        elaborative: "• <b>Iterations:</b> Relaxes all edges exactly V-1 times to ensure convergence.<br>• <b>Negative Cycle Detection:</b> A V-th iteration update confirms a cycle exists.<br>• <b>Relaxation:</b> Updates distances if a shorter path is found via an edge link.<br>• <b>DP Approach:</b> Solves subproblems by path length (1-edge to V-1 edges maximum).<br>• <b>Edge Order:</b> Order of relaxation doesn't matter for the final convergence logic.<br>• <b>Space:</b> Only O(V) space to store the current best distance estimates array.<br>• <b>Robustness:</b> Works on any graph that doesn't have a negative cycle reachable.<br>• <b>Applications:</b> Arbitrage detection in currency exchange markets and systems.<br>• <b>Comparison:</b> Slower than Dijkstra (O(VE) vs O(E log V) complexity metrics).<br>• <b>Pre-requirements:</b> Graph represented as an edge list or adjacency list structure.",
        basic: "Implement Bellman-Ford for a graph with some negative weight edges.",
        nextLevel: "Detect if a negative cycle exists in a directed weighted graph object."
    },
    "floyd-warshall": {
        title: "Floyd-Warshall Algorithm",
        short: "• Finds shortest paths between ALL pairs of nodes in a graph.<br>• Handles negative edge weights but no negative weight cycles.<br>• Simple implementation using a matrix and triple nested loops.<br>• O(V³) time complexity and O(V²) space complexity for results data.<br>• Dynamic programming approach: considers each node as intermediate.<br>• Ideal for dense, small-to-medium graphs where V is small.",
        elaborative: "• <b>State:</b> <code>dp[i][j]</code> is the shortest path between node i and j.<br>• <b>Transition:</b> <code>dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])</code> for node k.<br>• <b>Initialization:</b> Matrix stores edge weights; self-loops are 0 distance nodes.<br>• <b>Negative Cycle:</b> If <code>dp[i][i]</code> becomes negative, a cycle is detected.<br>• <b>Dense Graphs:</b> More efficient than running Dijkstra V times on dense data sets.<br>• <b>Transitive Closure:</b> Can find reachability using boolean logic (OR/AND) gates.<br>• <b>Memory usage:</b> Limited by O(V²) matrix size, capped by system ram availability.<br>• <b>Order:</b> The 'k' loop must be OUTERMOST for DP correctness in logic.<br>• <b>Applications:</b> Finding network reliability or all-pairs connectivity metrics.<br>• <b>Bitsets:</b> Can be optimized for reachability using bitset operations in code.",
        basic: "Calculate the shortest path matrix for a graph with 5 total nodes.",
        nextLevel: "Find the smallest city with fewest neighbors within distance threshold limit."
    },
    "minimum spanning tree": {
        title: "Minimum Spanning Tree (MST)",
        short: "• Subgraph that connects all vertices with no cycles & minimum weight.<br>• Spans the entire graph while minimizing the sum of edge weights.<br>• Requires a connected, undirected graph with edge weights logic.<br>• Solve using Prim's (vertex-based) or Kruskal's (edge-based) algorithms.<br>• Crucial for network design (cabling, pipes, electrical grid layouts).<br>• Any graph with V nodes has an MST with exactly V-1 edges.",
        elaborative: "• <b>Unique MST:</b> If all edge weights are unique, only one MST exists.<br>• <b>Cut Property:</b> For any cut, minimum weight edge crossing it is in MST.<br>• <b>Cycle Property:</b> The max weight edge in any cycle is NOT in the MST.<br>• <b>Prim's:</b> Starts from a node and grows the tree greedily using Min-Heap.<br>• <b>Kruskal's:</b> Sorts all edges and adds them if they don't form a cycle.<br>• <b>Forest:</b> If the graph is disconnected, we get a Minimum Spanning Forest.<br>• <b>Weights:</b> Works fine with negative weights (unlike shortest path).<br>• <b>Applications:</b> Clustering algorithms in data science and networks.<br>• <b>Efficiency:</b> Typically O(E log E) or O(E log V) depending on heap type.<br>• <b>Memory:</b> O(V+E) for graph storage plus auxiliary structures like DSU.",
        basic: "Explain the difference between Prim and Kruskal MST strategies.",
        nextLevel: "Find the MST weight using Kruskal algorithm + DSU structure."
    },
    "kmp algorithm": {
        title: "KMP (Knuth-Morris-Pratt)",
        short: "• Linear time string matching algorithm: O(N + M) complexity.<br>• Avoids redundant comparisons using a preprocessed 'LPS' array.<br>• LPS (Longest Proper Prefix which is also a Suffix) guides jump logic.<br>• Never backtracks the pointer in the main text search string.<br>• Best for multiple pattern searches within large documents or files.<br>• Space complexity is O(M) where M is pattern length in memory.",
        elaborative: "• <b>Failure Function:</b> If a mismatch happens at P[j], P[0...j-1] matched.<br>• <b>Jumping:</b> Instead of resetting, jump to text pointer + LPS[j-1].<br>• <b>Text Pointer:</b> Always moves forward, ensuring linear O(N) traversal.<br>• <b>Preprocessing:</b> Building LPS table takes O(M) using matching logic.<br>• <b>Stability:</b> Handles patterns with repeated prefixes (like 'AAAA') well.<br>• <b>Comparison:</b> Brute force is O(N*M); KMP is strictly O(N+M) time.<br>• <b>Applications:</b> DNA sequencing, search engines, and grep utility.<br>• <b>Correctness:</b> Guaranteed never to skip a potential match in text.<br>• <b>Trade-off:</b> Requires extra O(M) space for the prefix lookup table.<br>• <b>Variations:</b> Can be modified for cyclic shifts or multiple patterns.",
        basic: "Calculate the LPS array for pattern 'ABCABD' in KMP.",
        nextLevel: "Find all occurrences of a pattern in a text using KMP algorithm."
    },
    "suffix array": {
        title: "Suffix Array",
        short: "• Sorted array of all possible suffixes of a given string.<br>• Used for pattern matching and finding repeating substrings.<br>• More space-efficient alternative to a Suffix Tree.<br>• Lookup of a pattern takes O(M log N) time complexity.<br>• Essential for bio-informatics and document searches.<br>• Constructed in O(N log N) or O(N log² N) time.",
        elaborative: "• <b>Structure:</b> Array of integers representing starting positions of suffixes.<br>• <b>Pattern Matching:</b> Binary search on the sorted suffixes for the pattern.<br>• <b>LCP Array:</b> Longest Common Prefix array used to speed up queries.<br>• <b>Redundancy:</b> Finds longest repeated substring in a string in O(N).<br>• <b>Distinct Substrings:</b> Total number can be found using N(N+1)/2 - sum(LCP).<br>• <b>Lexicographical Order:</b> Naturally sorts suffixes for rank-based queries.<br>• <b>Suffix Tree Relation:</b> Suffix Array + LCP = Suffix Tree information.<br>• <b>Space:</b> O(N) integers, significantly smaller than nodes in a tree.<br>• <b>Construction (SA-IS):</b> Advanced algo that builds it in linear O(N).<br>• <b>Applications:</b> Finding the lexicographically smallest rotation of a string.",
        basic: "Build a Suffix Array for string 'banana' manually.",
        nextLevel: "Find the longest repeating substring in string S."
    },
    "game theory": {
        title: "Game Theory (Impartial Games)",
        short: "• Analyzes strategies for games where players follow optimal logic.<br>• Focuses on impartial games like Nim with no hidden info.<br>• Sprague-Grundy theorem converts games to single Nim values.<br>• Helps determine 'Winning' or 'Losing' states of a position.<br>• Essential for solving competitive programming math puzzles.<br>• Relies on the XOR sum of pile sizes for Nim game analysis.",
        elaborative: "• <b>P-position:</b> Previous player (the one who just moved) wins.<br>• <b>N-position:</b> Next player (the one about to move) wins.<br>• <b>Nim Sum:</b> XOR of the sizes of all piles in the Nim game.<br>• <b>Zero Sum:</b> A Nim Sum of 0 means the current state is a P-position.<br>• <b>Grundy Number:</b> MEX (Minimum Excluded value) of Grundy of reachable states.<br>• <b>Optimal Play:</b> Players move to reach a P-position for their opponent.<br>• <b>Backward Induction:</b> Solving game states from terminal to initial.<br>• <b>Combinatorial Games:</b> Deterministic games played by two players with no ties.<br>• <b>Equivalence:</b> Every impartial game under normal play is a Nim pile.<br>• <b>Applications:</b> AI for board games and strategic optimization logic.",
        basic: "Explain the Nim game rules and the winning strategy.",
        nextLevel: "Solve the 'Green Hackenbush' on a line graph."
    },
    "network flow": {
        title: "Network Flow (Max Flow)",
        short: "• Models capacity-constrained flow through a directed graph.<br>• Goal is to find the maximum possible flow from Source to Sink.<br>• Ford-Fulkerson and Edmonds-Karp are standard solvers.<br>• O(V*E²) complexity for standard BFS-based implementations.<br>• Max Flow = Min Cut (the smallest bottleneck in the system).<br>• Crucial for logistics, oil pipelines, and matching tasks.",
        elaborative: "• <b>Flow Network:</b> Directed graph where edges have limited capacity.<br>• <b>Residual Graph:</b> Shows remaining capacities and reverse flows for undo.<br>• <b>Augmenting Path:</b> A path in the residual graph where flow can be added.<br>• <b>Saturation:</b> An edge is saturated when its flow equals its capacity.<br>• <b>Conservation:</b> Sum of flow IN = Sum of flow OUT for every node (except S/T).<br>• <b>Dinic's Algo:</b> Improved version using level graphs and blocking flows.<br>• <b>Min-Cut:</b> Finding the set of edges whose removal disconnects S and T with min cost.<br>• <b>Circulation:</b> Flow networks with demands instead of just source/sink.<br>• <b>Applications:</b> Bipartite matching, image segmentation, and airline scheduling.<br>• <b>Integrity:</b> If capacities are integers, the max flow is also an integer.",
        basic: "Define Source, Sink, and Capacity in network flow.",
        nextLevel: "Solve the 'Maximum Bipartite Matching' using Max Flow logic."
    },
    "caching algorithms": {
        title: "Caching Algorithms (LRU / LFU)",
        short: "• Manage memory by deciding which items to keep or discard.<br>• High-speed storage layer for frequently accessed data items.<br>• Optimized for O(1) performance in both Get and Put operations.<br>• Minimizes latency and reduces load on primary data sources.<br>• Essential for web servers, databases, and OS memory managers.<br>• LRU (Least Recently Used) is the most popular implementation.",
        elaborative: "• <b>LRU Strategy:</b> Discards the item that hasn't been used for the longest time.<br>• <b>LFU Strategy:</b> Discards the item with the lowest access frequency.<br>• <b>FIFO Strategy:</b> Evicts items in the same order they were added to cache.<br>• <b>MRU Strategy:</b> Discards the most recently used (rare, but useful in database scans).<br>• <b>Implementation:</b> LRU uses HashMap + Doubly Linked List for O(1) ops.<br>• <b>Frequency Maps:</b> LFU requires bucketing items by their count of usage.<br>• <b>Dirty Bits:</b> Tracking if cached data has changed relative to source.<br>• <b>Write Policies:</b> Write-through vs Write-back for syncing with disk.<br>• <b>Hit Ratio:</b> Metric measuring effectiveness of the cache algorithm.<br>• <b>Capacity:</b> Fixed size; when full, eviction policy must be triggered.",
        basic: "Implement a basic 'Last-In-First-Out' (LIFO) cache.",
        nextLevel: "Implement a 'Least Recently Used' (LRU) Cache in O(1) time complexity."
    },
    "huffman coding": {
        title: "Huffman Coding",
        short: "• Lossless data compression algorithm using variable-length codes.<br>• Assigns shorter binary codes to more frequent data characters.<br>• Optimal for systems where character distribution is non-uniform.<br>• Uses a Priority Queue to build a binary 'Huffman Tree'.<br>• Prefix Property: No code is a prefix of any other code in set.<br>• Reduces file size without any data loss (entropy coding).",
        elaborative: "• <b>Frequency Table:</b> First step is counting occurrences of every symbol.<br>• <b>Tree Construction:</b> Pair smallest frequencies iteratively into nodes.<br>• <b>Code Assignment:</b> Assign 0 to left branches and 1 to right branches.<br>• <b>Prefix Code:</b> Ensures unambiguous decoding without need for separators.<br>• <b>Complexity:</b> O(N log N) using a min-heap to pick symbol pairs.<br>• <b>Greedy Choice:</b> Always combines the two symbols with lowest probability.<br>• <b>Space:</b> Requires storing the tree/table to decompress the data.<br>• <b>Comparison:</b> Foundation for JPEG and MP3 compression formats.<br>• <b>Entropy:</b> Gets close to the Shannon entropy limit for character sets.<br>• <b>Static vs Dynamic:</b> Codes can be fixed per file or update as data streams.",
        basic: "Manually build a Huffman Tree for string 'AAABBC'.",
        nextLevel: "Find the total number of bits required to store a message using Huffman."
    },
    "bloom filter": {
        title: "Bloom Filter",
        short: "• Probabilistic data structure for space-efficient membership testing.<br>• Can tell if an element is 'possibly in set' or 'definitely not in set'.<br>• Uses multiple hash functions and a large bit array structure.<br>• Never has false negatives but may have false positives.<br>• Extremely fast operations (O(k)) where k is number of hashes.<br>• Best for preventing expensive database lookups for missing keys.",
        elaborative: "• <b>Bit Array:</b> Starts with all zeros. Adding an element flips bits at hash indices.<br>• <b>False Positives:</b> Occur when bits for a missing element are set by others.<br>• <b>Hashing:</b> Quality and number of independent hash functions are critical.<br>• <b>Space:</b> Significantly less memory than a HashSet for large datasets.<br>• <b>Deletion:</b> Standard filters don't support deletion (use Counting Bloom Filters).<br>• <b>Scaling:</b> Optimal bit array size depends on expected element count N.<br>• <b>Query:</b> If any bit at hash(x) is 0, x is definitely not in the set.<br>• <b>Applications:</b> Malicious URL detection, weak password checks, CDNs.<br>• <b>Trade-off:</b> Accuracy vs Space. More bits/hashes reduce false positives.<br>• <b>Implementation:</b> Requires a library for non-cryptographic fast hashes (Murmur).",
        basic: "Explain why Bloom Filters never have false negatives.",
        nextLevel: "Calculate the probability of a false positive given M bits and K hashes."
    },
    "skip list": {
        title: "Skip List",
        short: "• Probabilistic data structure based on parallel linked lists.<br>• Allows for O(log N) search, insert, and delete on average.<br>• Simpler to implement than self-balancing trees (AVL/Red-Black).<br>• Uses multiple layers: higher layers skip over many nodes.<br>• Randomization determines the height of each node in the list.<br>• Offers logarithmic time complexity without complex rotations.",
        elaborative: "• <b>Layered Structure:</b> Level 0 is a full sorted linked list; higher levels skip nodes.<br>• <b>Search Logic:</b> Start at top-left, move right if possible, else move down.<br>• <b>Promotion:</b> When inserting, flip a coin to decide if the node goes to level i+1.<br>• <b>Expected Height:</b> Most nodes are at level 0; very few reach the top layer.<br>• <b>Comparison:</b> Same average complexity as BST but easier to concurrent-ize.<br>• <b>Memory:</b> O(N) extra pointers on average (usually 1/p ratio).<br>• <b>Determinism:</b> Worst case is O(N) but highly improbable with good randoms.<br>• <b>Applications:</b> Redis sorted sets, Lucene indexes, and Google BigTable.<br>• <b>Stability:</b> Stays balanced by the law of large numbers rather than pointers.<br>• <b>Implementation:</b> Node pointers are arrays; height is chosen at insertion.",
        basic: "Conceptually describe a search in a 3-level Skip List.",
        nextLevel: "Implement the insertion logic for a Skip List with probability 0.5."
    },
    "lowest common ancestor": {
        title: "Lowest Common Ancestor (LCA)",
        short: "• Deepest node in a tree that is an ancestor of both given nodes.<br>• Fundamental for finding distances between nodes in a tree.<br>• Can be solved using path comparison or Euler tours.<br>• Binary Lifting allows O(log N) queries after O(N log N) prep.<br>• Crucial for graph theory and hierarchical data analysis.<br>• The LCA of u and v is u if u is an ancestor of v (and vice versa).",
        elaborative: "• <b>Brute Force:</b> Trace both paths to root and find the first meeting point.<br>• <b>Binary Lifting:</b> Precompute 2^i-th ancestors for every node.<br>• <b>Sparse Table:</b> Convert LCA to Range Minimum Query on Euler Tour sequence.<br>• <b>Path Distance:</b> <code>dist(u,v) = depth(u) + depth(v) - 2*depth(LCA(u,v))</code>.<br>• <b>Tarjan's Off-line:</b> Computes all LCA queries in O(V + Q) using DSU.<br>• <b>Properties:</b> LCA is unique in a tree; it's the 'highest' shared relative.<br>• <b>Applications:</b> Finding dependencies in build systems or family trees.<br>• <b>Space:</b> O(V log V) for binary lifting tables; O(V) for basic DFS.<br>• <b>Precomputation:</b> Requires one DFS to store depths and parent pointers.<br>• <b>Scaling:</b> O(log N) query is scalable for millions of nodes and queries.",
        basic: "Find LCA of two nodes in a Binary Search Tree (BST).",
        nextLevel: "Implement LCA using Binary Lifting for a general tree."
    },
    "segment tree lazy": {
        title: "Segment Tree (Lazy Propagation)",
        short: "• Optimization for range updates in Segment Trees in O(log N).<br>• Defers updates to child nodes until they are actually queried.<br>• Uses a 'lazy array' to store pending updates for segments.<br>• Prevents O(N) time complexity during multiple range modifications.<br>• Ideal for range addition, range assignment, and range queries.<br>• Ensures both update and query operations stay logarithmic.",
        elaborative: "• <b>Lazy Concept:</b> Instead of updating all N nodes in range, mark the root of range.<br>• <b>Push Down:</b> When visiting a node with a pending update, push it to children.<br>• <b>Update Logic:</b> <code>tree[node] += (end - start + 1) * lazy[node]</code> for sum.<br>• <b>Overlap:</b> Only nodes fully inside the range get the lazy tag.<br>• <b>Space:</b> Requires a second array (lazy[]) of the same size as the tree.<br>• <b>Applications:</b> Dynamic range updates like adding X to all items in [L, R].<br>• <b>Consistency:</b> Must ensure lazy tags are pushed before processing queries.<br>• <b>Bitwise Ops:</b> Can handle range XOR, range AND if handled carefully.<br>• <b>Complexity:</b> Still O(log N) because we only visit 2*log N nodes per call.<br>• <b>Memory:</b> Tree and Lazy arrays take 4*N and 4*N space respectively.",
        basic: "Explain why standard Segment Trees take O(N) for range updates.",
        nextLevel: "Implement Range Add and Range Sum Query with Lazy Propagation."
    },
    "z algorithm": {
        title: "Z Algorithm",
        short: "• Linear time string matching algorithm using the 'Z-array'.<br>• <code>Z[i]</code> stores length of longest common prefix of <code>S[i..N-1]</code> and <code>S</code>.<br>• O(N + M) complexity for finding all occurrences of a pattern P in T.<br>• Uses a search window [L, R] to calculate Z values efficiently.<br>• Simpler to understand than KMP but achieves the same O(N) result.<br>• Ideal for finding periods in strings or longest common prefixes.",
        elaborative: "• <b>Z-Array:</b> Array of same length as S; <code>Z[0]</code> is usually undefined or 0.<br>• <b>Construction:</b> Uses previously computed Z-values to avoid re-scanning.<br>• <b>Linearity:</b> The R pointer only moves forward, ensuring O(N) time.<br>• <b>Pattern Search:</b> Create string <code>P + '$' + T</code>; Z values >= length(P) are matches.<br>• <b>Memory:</b> O(N) space to store the Z-array for the combined string.<br>• <b>Border Cases:</b> The delimiter '$' must not appear in P or T data.<br>• <b>String Compression:</b> Can find the smallest unit that repeats to form a string.<br>• <b>Efficiency:</b> Competitive with KMP and Rabin-Karp in performance tests.<br>• <b>Logic:</b> If <code>i > R</code>, calculate Z[i] from scratch. Else, use <code>Z[i-L]</code>.<br>• <b>Applications:</b> Finding all occurrences, frequency of prefixes, and palindromes.",
        basic: "Calculate the Z-array for string 'ababa'.",
        nextLevel: "Find all occurrences of 'abc' in 'ababcabc' using Z Algorithm."
    },
    "rabin-karp": {
        title: "Rabin-Karp Algorithm",
        short: "• String search algorithm using hashing for pattern matching.<br>• Uses a rolling hash to check pattern equality in O(1) per slot.<br>• O(N + M) average time but O(N*M) in the absolute worst case.<br>• Can search for multiple patterns simultaneously using a bloom filter.<br>• Effective for plagiarism detection and large volume text scanning.<br>• Relies on a good hash function to minimize false collisions.",
        elaborative: "• <b>Rolling Hash:</b> Efficiently calculates hash of next window from current.<br>• <b>Hash Form:</b> <code>H = (c1*b^(k-1) + c2*b^(k-2) + ...) % mod</code> numeric logic.<br>• <b>Verification:</b> If hashes match, do a character-by-character check for safety.<br>• <b>Spurious Hits:</b> False positive hash matches are handled by the re-check.<br>• <b>Base/Mod:</b> Use large primes (like 10^9 + 7) and a base (like 31 or 256).<br>• <b>Sliding:</b> <code>H_new = (H_old - (removed_char * base^k)) * base + new_char</code>.<br>• <b>Multidimensional:</b> Can be extended for 2D pattern matching in grids.<br>• <b>Applications:</b> Detecting plagiarism across many documents at once.<br>• <b>Stability:</b> Performance depends heavily on the chosen prime and base.<br>• <b>Space:</b> O(1) auxiliary space (excluding text and pattern storage).",
        basic: "Explain the rolling hash mechanism with a simple numeric example.",
        nextLevel: "Identify why Rabin-Karp can be O(N*M) in the worst case scenarios."
    },
    "branch and bound": {
        title: "Branch and Bound",
        short: "• Systematic method for solving discrete optimization problems.<br>• Explores state-space tree but prunes branches using 'bounds'.<br>• Uses a cost function to decide if a subset can contain a solution.<br>• Found elsewhere between Backtracking and BFS in search logic.<br>• Ideal for TSP (Traveling Salesman) and 0/1 Knapsack problems.<br>• Guaranteed to find global optimum if bounds are correct.",
        elaborative: "• <b>States:</b> Each node represents a partial solution or a sub-problem set.<br>• <b>Lower/Upper Bounds:</b> Estimate the best possible result from current node.<br>• <b>Pruning:</b> If <code>Bound(node) > BestSolutionFound</code>, discard the branch.<br>• <b>Strategy:</b> Uses Priority Queue (Best-First Search) for exploring 'promising' nodes.<br>• <b>Difference from Backtracking:</b> Backtracking explores ALL; B&B uses bounds.<br>• <b>Efficiency:</b> Saves exponential time by skipping huge portions of the tree.<br>• <b>Memory:</b> Can be intensive as many active nodes are stored in the queue.<br>• <b>Implementation:</b> Requires a Priority Queue of 'Node' objects with lower bounds.<br>• <b>Applications:</b> Integer programming, scheduling, and logistics optimization.<br>• <b>Success Factors:</b> Depends on how 'tight' the bounding functions actually are.",
        basic: "Differentiate between Backtracking and Branch and Bound strategies.",
        nextLevel: "Solve the 0/1 Knapsack problem using Branch and Bound with a max-heap."
    },
    "memoization": {
        title: "Memoization (Top-Down DP)",
        short: "• Optimization technique storing results of expensive function calls.<br>• Turns exponential recursion into linear/polynomial time tasks.<br>• Stores subproblem answers in an array or map for reuse.<br>• Follows a 'Top-Down' approach: starts with the main target.<br>• Easiest way to upgrade a naive recursive solution to efficient DP.<br>• Reduces the 'Height' of the recursion tree by skipping re-calculations.",
        elaborative: "• <b>State Space:</b> The set of all unique inputs the function can receive.<br>• <b>Lookup:</b> First step of function: <code>if (memo[state] exists) return memo[state]</code>.<br>• <b>Storage:</b> Results are cached immediately before <code>return</code> from recursion.<br>• <b>Trade-off:</b> Trades memory (Space) for significant speed (Time) gains.<br>• <b>Recursive Stack:</b> Still limited by the maximum recursion depth of runtime.<br>• <b>Initialization:</b> Memo table often filled with -1 or null to mark 'unsolved'.<br>• <b>Overlapping:</b> Only useful if subproblems are revisited (e.g., Fibonacci).<br>• <b>Stability:</b> Always produces the same result for the same input (Pure function).<br>• <b>Comparison:</b> Tabulation (Bottom-Up) is often better for memory overhead.<br>• <b>Applications:</b> Shortest paths, sequence alignment, and game state caching.",
        basic: "Implement Fibonacci sequence using naive recursion vs Memoization.",
        nextLevel: "Optimize the 'LCS' (Longest Common Subsequence) using a 2D memo table."
    },
    "matrix algorithms": {
        title: "Matrix Algorithms",
        short: "• Dealing with 2D grids and linear algebra computations.<br>• Includes rotation, searching, and pathfinding on grids.<br>• Essential for image processing and graphics programming.<br>• Traversal methods include Spiral, Zig-zag, and Diagonal.<br>• Matrix Exponentiation is used to solve DP in O(log N).<br>• Fundamental for machine learning and physics simulations.",
        elaborative: "• <b>Spiral Order:</b> Efficiently visiting all elements in a spiral path O(NM).<br>• <b>Binary Search:</b> Efficiently finding items in sorted rows and columns.<br>• <b>Chain Multiplication:</b> Optimal order of multiplying multiple matrices (DP).<br>• <b>Rotation:</b> Rotating a square matrix by 90/180 degrees in-place.<br>• <b>Determinant:</b> Calculating the volume scale factor of a transformation.<br>• <b>Rank:</b> Finding the dimension of the vector space spanned by rows.<br>• <b>Island Count:</b> BFS/DFS on grid to find connected clusters of 1s.<br>• <b>Prefix Sum 2D:</b> O(1) query for any rectangle sum after O(NM) prep.<br>• <b>Inplace:</b> Modifying the grid without using extra 2D auxiliary arrays.<br>• <b>Adjacency Matrix:</b> Representing graphs where M[i][j] is edge weight.",
        basic: "Search for a target value in a row-wise and column-wise sorted 2D matrix.",
        nextLevel: "Print a given matrix in Spiral Order without using extra space."
    },
    "computational geometry": {
        title: "Computational Geometry",
        short: "• Algorithms for points, lines, polygons, and geometric shapes.<br>• Solve problems like Convex Hull and Closest Pair of Points.<br>• Crucial for CAD, robotics, and video game development.<br>• Uses cross products to determine orientation (CW or CCW).<br>• Essential for collision detection in interactive media systems.<br>• Often relies on Sweep Line or Divide and Conquer techniques.",
        elaborative: "• <b>Convex Hull:</b> Smallest convex polygon containing all points in a set.<br>• <b>Jarvis March:</b> Gift wrapping algorithm for convex hulls in O(NH) time.<br>• <b>Graham Scan:</b> O(N log N) method using polar angles for hulls.<br>• <b>Point in Polygon:</b> Uses Ray Casting logic to check if point is inside.<br>• <b>Intersecting Lines:</b> Formula based check using cross products of segments.<br>• <b>Closest Pair:</b> O(N log N) Divide & Conquer algo to find proximity.<br>• <b>Voronoi Diagram:</b> Partitioning plane into regions based on distance.<br>• <b>Sweep Line:</b> Vertical line moving across the plane to handle overlaps.<br>• <b>Area:</b> Pick's Theorem or Shoelace formula for polygon area calculation.<br>• <b>Bounding Box:</b> Finding the smallest rectangle enclosing all shapes.",
        basic: "Calculate the distance between two points (x1, y1) and (x2, y2).",
        nextLevel: "Implement the 'Shoelace Formula' to find the area of a polygon."
    },
    "meet in the middle": {
        title: "Meet in the Middle",
        short: "• Space-time tradeoff for solving large search space problems.<br>• Splits input into two halves and solves them independently.<br>• Merges results to reach total solution in O(2^(N/2)) time.<br>• Drastically reduces exponential complexity from 2^N to 2^(N/2).<br>• Popular for Subset Sum and discrete logarithm problems.<br>• Usually works when states can be combined or looked up.",
        elaborative: "• <b>Mechanism:</b> Solve P1 (first half) and store results in a HashMap.<br>• <b>Matching:</b> Solve P2 and check if <code>Target - Result(P2)</code> is in Map.<br>• <b>Complexity:</b> O(N * 2^(N/2)) including the map/sorting merge step.<br>• <b>Subset Sum:</b> Find if any subset adds to X when N is up to 40.<br>• <b>Memory:</b> Requires O(2^(N/2)) space to store the results of one half.<br>• <b>Binary Search:</b> Can use sorting + binary search if Map is too heavy.<br>• <b>Applicability:</b> Works on problems where sub-results are additive.<br>• <b>4-Sum Problem:</b> Can be solved by splitting 4 numbers into 2 pairs.<br>• <b>Trade-off:</b> Significant speed-up at the cost of high memory usage.<br>• <b>Limit:</b> Typically effective when N is between 30 and 45 in dsa.",
        basic: "Explain the core idea of Meet in the Middle with an example.",
        nextLevel: "Solve 'Subset Sum' for N=40 using Meet in the Middle technique."
    },
    "jump search": {
        title: "Jump Search",
        short: "• Search algorithm for sorted arrays that jumps ahead by fixed steps.<br>• Optimal step size is √N to minimize the number of comparisons.<br>• Faster than Linear Search but slower than Binary Search (O(√N)).<br>• Moves backward linearly once the target range is identified.<br>• Useful when jumping is cheaper than many individual comparisons.<br>• Requires the array to be sorted before the search begins.",
        elaborative: "• <b>Efficiency:</b> Between O(N) linear and O(log N) logarithmic performance.<br>• <b>Step Size:</b> Mathematically proven to be √(total elements) for best results.<br>• <b>Traversal:</b> Jumps <code>pos += step</code> until <code>arr[pos] > target</code>.<br>• <b>Scan:</b> Performs a backward linear search from the jump boundary.<br>• <b>Comparison:</b> Fewer jumps than Binary Search but more linear steps.<br>• <b>Hardware:</b> Can be better for systems with expensive random access.<br>• <b>Constraint:</b> Array must be sorted and size must be known upfront.<br>• <b>Edge Cases:</b> Target at start, target at end, or target not present.<br>• <b>Memory:</b> O(1) space complexity as it only uses pointer variables.<br>• <b>Use Case:</b> Searching in large blocks or legacy tape-based data systems.",
        basic: "Find the optimal jump size for an array of size 100.",
        nextLevel: "Implement Jump Search for an array of 500 integers."
    },
    "exponential search": {
        title: "Exponential Search",
        short: "• Finds a range where the target exists using powers of two.<br>• Once the range is found, it uses Binary Search for the target.<br>• O(log i) complexity where i is the index of the target element.<br>• Highly efficient for unbounded or very large sorted arrays.<br>• Starts with small steps and doubles the step size exponentially.<br>• Better than Binary Search when the target is near the start.",
        elaborative: "• <b>Bound Finding:</b> Start at index 1 and double (1, 2, 4, 8...) until <code>arr[i] > target</code>.<br>• <b>Binary Step:</b> Perform Binary Search in the range <code>[i/2, min(i, n-1)]</code>.<br>• <b>Complexity:</b> Strictly O(log i), making it 'galloping' through data.<br>• <b>Unbounded:</b> Can search even if the end of the array is unknown.<br>• <b>Performance:</b> Outperforms Binary Search if target is in the first half.<br>• <b>Space:</b> O(1) iterative or O(log i) recursive stack in memory.<br>• <b>Consistency:</b> Requires a sorted collection like other range searches.<br>• <b>Optimization:</b> Frequently used in search engines and large data lookups.<br>• <b>Logic:</b> Quickly narrows down the search space to a manageable power of 2.<br>• <b>Reliability:</b> Very stable with predictable logarithmic performance curves.",
        basic: "Identify the range for target 45 in array [10, 20, 30, 40, 50] using Exponential Search.",
        nextLevel: "Implement Exponential Search for an infinitely growing range."
    },
    "interpolation search": {
        title: "Interpolation Search",
        short: "• Improved binary search for uniformly distributed sorted data.<br>• Estimates the target position using the values at the boundaries.<br>• Complexity is O(log log N) for perfectly uniform data sets.<br>• Similar to how humans look up a name in a physical phone book.<br>• In worst case (non-uniform), performance drops to O(N) linear.<br>• Calculation: <code>pos = low + (target-arr[low])*(high-low)/(arr[high]-arr[low])</code>.",
        elaborative: "• <b>Estimation:</b> Uses linear interpolation formula to guess the index.<br>• <b>Uniformity:</b> Only efficient if elements are spread out evenly numerically.<br>• <b>Formula:</b> Proportional distance calculation between known range values.<br>• <b>Best Case:</b> O(log log N), significantly faster than standard Binary Search.<br>• <b>Worst Case:</b> O(N) if data is exponentially increasing or clustered.<br>• <b>Constraint:</b> Array must be sorted and data must be numerical values.<br>• <b>Space:</b> O(1) auxiliary space used during the iterative search.<br>• <b>Application:</b> Searching in massive databases where values are linear.<br>• <b>Comparison:</b> Smarter than Binary Search but risky on random data distributions.<br>• <b>Logic:</b> Jumps closer to where the target 'should' be based on value.",
        basic: "Calculate the first position guess for target 500 in range [100, 1000].",
        nextLevel: "Compare Interpolation Search vs Binary Search on a dataset of 1..1000."
    },
    "shell sort": {
        title: "Shell Sort",
        short: "• Generalization of Insertion Sort that allows far-away swaps.<br>• Uses a 'gap sequence' to sort elements at decreasing distances.<br>• Performance depends heavily on the choice of gap sequence used.<br>• Complexity varies from O(N log N) to O(N²) based on system gaps.<br>• In-place sorting algorithm with O(1) extra memory requirement.<br>• More efficient than Simple Insertion Sort for medium-sized lists.",
        elaborative: "• <b>Concept:</b> Move elements multiple positions at once using large gaps.<br>• <b>Gap Sequence:</b> Popular choices include Shell's (n/2), Knuth's (3k+1).<br>• <b>Final Step:</b> The last pass is always a standard Gap-1 Insertion Sort.<br>• <b>Stability:</b> Not a stable sort (relative order of equals can change).<br>• <b>Space:</b> Strictly O(1) as it re-arranges the original array data.<br>• <b>Cache:</b> Better cache locality than some more complex O(N log N) sorts.<br>• <b>Performance:</b> Faster than O(N²) sorts but usually slower than Quick/Merge.<br>• <b>Logic:</b> Aim is to make the array 'mostly sorted' early in the process.<br>• <b>Adaptive:</b> Works faster if the array is already partially sorted.<br>• <b>History:</b> One of the first sorting algorithms to break the O(N²) barrier.",
        basic: "Perform a Shell Sort pass on [9, 5, 2, 7] with a gap of 2.",
        nextLevel: "Implement Shell Sort using Knuth's gap sequence (h = 3h + 1)."
    },
    "counting sort": {
        title: "Counting Sort",
        short: "• Non-comparison based sort for integers in a specific range.<br>• O(N + K) complexity where K is the range of input values.<br>• Uses an auxiliary array to count occurrences of each element.<br>• Stable sort that preserves relative order of duplicate items.<br>• Extremely fast when the range of values is not too large.<br>• Memory usage is proportional to the range of the numbers.",
        elaborative: "• <b>Frequency Map:</b> Counts how many times each value appears in the set.<br>• <b>Cumulative Sum:</b> Prefix sums of counts determine final positions.<br>• <b>Range Constraint:</b> Inefficient if K (max value) is much larger than N.<br>• <b>Stable:</b> Can be used as a sub-routine for other stable algorithms.<br>• <b>Negative Values:</b> Can handle negatives by shifting values to [0, K].<br>• <b>Space:</b> O(N + K) extra memory for the count and output arrays.<br>• <b>Comparison:</b> Beats the O(N log N) limit for comparison-based sorts.<br>• <b>Logic:</b> Mapping value directly to index to avoid pairwise checks.<br>• <b>Use Case:</b> Sorting grades (0-100) or character frequencies in text.<br>• <b>Object Sorting:</b> Can sort items with keys using stability properties.",
        basic: "Sort the array [4, 2, 2, 8, 3, 3, 1] using Counting Sort logic.",
        nextLevel: "Explain why Counting Sort isn't suitable for sorting 10 floats in range 0-1."
    },
    "radix sort": {
        title: "Radix Sort",
        short: "• Sorts numbers digit by digit starting from Least Significant.<br>• Uses Counting Sort as a stable sub-routine for each digit.<br>• O(D * (N + K)) where D is number of digits in max value.<br>• Can handle very large numbers efficiently without comparisons.<br>• Highly effective for fixed-length keys like Zip codes or IDs.<br>• Requires elements to have a clear 'digit' or 'radix' structure.",
        elaborative: "• <b>LSD approach:</b> Starts from rightmost digit to maintain global order.<br>• <b>Radix Base:</b> Typically uses base 10 for numbers or 256 for strings.<br>• <b>Complexity:</b> Linear time O(N) if the number of digits D is constant.<br>• <b>Stability:</b> Only works if the underlying sort (per digit) is stable.<br>• <b>Memory:</b> Uses O(N + K) space inherited from the Counting Sort logic.<br>• <b>Negative IDs:</b> Handled by sorting negatives separately or shifting range.<br>• <b>Parallelism:</b> Can be parallelized for different digits in large sets.<br>• <b>Strings:</b> Can sort strings of equal length by treating chars as digits.<br>• <b>Comparison:</b> Often faster than QuickSort for large collections of ints.<br>• <b>Restriction:</b> Limited to discrete data; harder to apply to arbitrary floats.",
        basic: "Sort [170, 45, 75, 90, 802, 24, 2, 66] using the last digit (LSD).",
        nextLevel: "Implement Radix Sort for a list of 1000 5-digit phone numbers."
    },
    "bucket sort": {
        title: "Bucket Sort",
        short: "• Distributes elements into several 'buckets' based on value.<br>• Each bucket is then sorted individually using another algorithm.<br>• Performs in O(N) average time for uniformly distributed data.<br>• Worst case performance is O(N²) if all items fall in one bucket.<br>• Ideal for sorting floating point numbers in the range [0, 1].<br>• Uses a combination of distribution and comparison-based sorting.",
        elaborative: "• <b>Distribution:</b> Maps values to buckets using <code>index = N * value</code>.<br>• <b>Individual Sort:</b> Usually uses Insertion Sort for small buckets.<br>• <b>Memory:</b> O(N + K) space to store the bucket lists and final array.<br>• <b>Uniformity:</b> Performance relies on items being spread evenly in range.<br>• <b>Integration:</b> Can be seen as a generalization of Counting Sort logic.<br>• <b>Stability:</b> Can be stable if the individual bucket sort is stable.<br>• <b>Large Data:</b> Highly efficient for external sorting (data on disk).<br>• <b>Floating Points:</b> Handles decimals well by scaling them to range.<br>• <b>Efficiency:</b> Reduces total comparisons by partitioning data early.<br>• <b>Applications:</b> Histogram generation and data distribution analysis.",
        basic: "Sort [0.12, 0.43, 0.05, 0.38] into 4 buckets in range [0, 1].",
        nextLevel: "Implement Bucket Sort for 1000 random floating point numbers."
    },
    "strongly connected components": {
        title: "Strongly Connected Components (SCC)",
        short: "• Maximal subgraphs where every vertex is reachable from every other.<br>• Only exists in directed graphs (undirected equivalent is components).<br>• Nodes in an SCC form cycles that allow full internal traversal.<br>• Compressing SCCs into single nodes results in a Directed Acyclic Graph (DAG).<br>• Useful for analyzing ecological webs and social network clusters.<br>• Solved efficiently using Tarjan's or Kosaraju's algorithms.",
        elaborative: "• <b>Definition:</b> For nodes u, v in SCC, paths u->v and v->u both exist.<br>• <b>Condensation:</b> Replacing each SCC with a node creates a 'Meta-graph'.<br>• <b>Cycles:</b> Every node in a directed cycle belongs to the same SCC.<br>• <b>Bridges:</b> Edges connecting different SCCs are called components' bridges.<br>• <b>Application:</b> Finding mutually reachable groups in communication networks.<br>• <b>Complexity:</b> Linear time O(V + E) using DFS-based methods.<br>• <b>Detection:</b> Can be used to check if a directed graph is a DAG.<br>• <b>Hierarchy:</b> Helps in understanding the control-flow of large programs.<br>• <b>Logic:</b> Uses the concept of 'lowest reachable' node in a DFS tree.<br>• <b>Connectivity:</b> Distinguishes between weak and strong connectivity in graphs.",
        basic: "Identify all SCCs in a simple 3-node cycle 1->2->3->1.",
        nextLevel: "Explain why regular BFS cannot find Strongly Connected Components."
    },
    "tarjan's algorithm": {
        title: "Tarjan's Algorithm (SCC)",
        short: "• Single pass DFS algorithm to find all SCCs in O(V + E).<br>• Uses an index and 'low-link' value for each node in tree.<br>• Maintains a stack to keep track of nodes in the current branch.<br>• Identifies the 'root' of an SCC when index equals low-link.<br>• Highly efficient and only requires a single traversal of graph.<br>• Invented by Robert Tarjan (also known for DSU and Trees).",
        elaborative: "• <b>DFS Index:</b> Sequential number given to nodes during discovery.<br>• <b>Low-Link Value:</b> Smallest index reachable from node via back-edges.<br>• <b>Stack:</b> Stores nodes that are currently part of the active search path.<br>• <b>Wait:</b> Nodes stay on stack until their entire SCC is determined.<br>• <b>Condition:</b> If <code>low-link[u] == index[u]</code>, everything on stack above u is one SCC.<br>• <b>Back-edges:</b> Crucial for updating low-link values during backtracking.<br>• <b>Complexity:</b> Strictly linear O(V + E) in terms of vertices and edges.<br>• <b>Parallel:</b> Less naturally parallelizable than Kosaraju's algorithm.<br>• <b>Space:</b> O(V) for the stack and auxiliary metadata arrays.<br>• <b>Robustness:</b> Works perfectly for large sparse directed graph structures.",
        basic: "Explain the purpose of 'low-link' values in Tarjan's search.",
        nextLevel: "Implement Tarjan's algorithm for a directed graph with 10 nodes."
    },
    "kosaraju's algorithm": {
        title: "Kosaraju's Algorithm (SCC)",
        short: "• Simple two-pass DFS algorithm for finding all SCCs in a graph.<br>• Based on the observation that SCCs are same in the reversed graph.<br>• Uses a stack to order nodes based on their 'finish' times.<br>• Easier to implement than Tarjan's for many programmers.<br>• Time complexity is O(V + E), same as other linear methods.<br>• Requires the ability to transpose (reverse) the graph edges.",
        elaborative: "• <b>Pass 1:</b> Standard DFS. When a node's search finishes, push it to stack.<br>• <b>Transpose:</b> Reverse the direction of every edge in the directed graph.<br>• <b>Pass 2:</b> Pop nodes from stack. If unvisited, start DFS on transposed graph.<br>• <b>Component:</b> All nodes reached in a single Pass 2 DFS form one SCC.<br>• <b>Logic:</b> Processing in finishing order ensures we don't 'leak' into other SCCs.<br>• <b>Sink/Source:</b> Explores components in reverse topological order effectively.<br>• <b>Space:</b> O(V + E) to store the reversed (transposed) graph object.<br>• <b>Utility:</b> Very clear logic, though twice as much graph traversal as Tarjan.<br>• <b>DAG:</b> First pass is essentially trying to topologically sort a non-DAG.<br>• <b>Applications:</b> Finding dependencies and cyclic modular references.",
        basic: "Manually trace Kosaraju's steps on a 4-node linear graph 1->2->3->4.",
        nextLevel: "Implement a graph transposition function in JavaScript or Python."
    },
    "articulation points and bridges": {
        title: "Articulation Points & Bridges",
        short: "• Critical vertices and edges whose removal increases components.<br>• Articulation Point: Removing the vertex disconnects the graph.<br>• Bridge: Removing the edge disconnects the graph structure.<br>• Found using a single DFS traversal in linear O(V + E) time.<br>• Used to identify weaknesses in communication or power grids.<br>• Calculated using discovery and low-link values (similar to Tarjan).",
        elaborative: "• <b>Discovery Time:</b> The order in which nodes are visited in DFS tree.<br>• <b>Low-Link:</b> Minimum discovery time reachable via a back-edge.<br>• <b>Bridge Check:</b> <code>low[v] > disc[u]</code> (cannot reach u or above from child v).<br>• <b>Point Check:</b> <code>low[v] >= disc[u]</code> for non-root nodes in DFS tree.<br>• <b>Root Exception:</b> Root is an AP only if it has more than one child.<br>• <b>Memory:</b> O(V) extra space for discovery, low-link, and parent arrays.<br>• <b>Network Design:</b> Building 'biconnected' graphs to avoid single failure points.<br>• <b>Logic:</b> Bridges can only exist in undirected graphs as a terminal link.<br>• <b>Biconnected:</b> A graph with no articulation points is called biconnected.<br>• <b>Complexity:</b> O(V + E), very fast even for massive infrastructure graphs.",
        basic: "Define an Articulation Point vs a Bridge in graph theory.",
        nextLevel: "Find all bridges in a given undirected graph with 12 edges."
    },
    "euler tour": {
        title: "Euler Tour (Tree Flattening)",
        short: "• Flattens a tree into an array by recording visit/exit times.<br>• Converts subtree queries into range queries on a flat array.<br>• Every node appears twice in the tour (entry and exit points).<br>• Essential for solving tree problems with Segment Trees or BIT.<br>• Can be used to find LCA by converting it to an RMQ problem.<br>• Preserves the parent-child relationships in a linear data format.",
        elaborative: "• <b>Traversal:</b> Perform DFS and record node during every 'visit' event.<br>• <b>Flattening:</b> Node <code>u</code>'s subtree is the range <code>[startTime[u], endTime[u]]</code>.<br>• <b>LCA Mapping:</b> LCA of u, v is node with min depth in range <code>[in[u], in[v]]</code>.<br>• <b>Space:</b> Results in an array of size 2*N or N depending on recording style.<br>• <b>Range Updates:</b> Adding X to subtree u becomes update on range <code>[start, end]</code>.<br>• <b>Types:</b> Directed Euler path vs Tree-based Euler traversal logic.<br>• <b>In-Out times:</b> Crucial for checking if one node is an ancestor of another.<br>• <b>Distance:</b> Calculate distance using flattening and Segment Tree sums.<br>• <b>Implementation:</b> Uses a global timer variable during a recursive DFS.<br>• <b>Utility:</b> Bridge between complex tree structures and simple array math.",
        basic: "Create an Euler Tour (In-Out times) for a 3-level binary tree.",
        nextLevel: "Find the LCA of two nodes using Euler Tour and Segment Tree RMQ."
    },
    "binary lifting": {
        title: "Binary Lifting",
        short: "• Technique to quickly move up a tree using powers of two.<br>• Precomputes 2^i-th ancestors for every node in the graph.<br>• Allows jumping <code>K</code> levels up in logarithmic O(log K) time.<br>• Standard method for finding LCA in dynamic tree structures.<br>• O(N log N) preprocessing complexity with O(log N) query time.<br>• Uses a 2D table <code>up[node][power]</code> to store jump locations.",
        elaborative: "• <b>Table Filling:</b> <code>up[u][i] = up[up[u][i-1]][i-1]</code> (Recursive jump math).<br>• <b>Initialization:</b> <code>up[u][0]</code> is the immediate parent of node <code>u</code>.<br>• <b>LCA Query:</b> Bring both nodes to same depth, then jump until parents meet.<br>• <b>Binary Search:</b> Jumping represents binary decomposing the path length.<br>• <b>Space:</b> O(N log N) space, making it slightly memory intensive for huge data.<br>• <b>Dynamic:</b> Can handle changes to tree if rebuilt or updated carefully.<br>• <b>Depth:</b> Requires depth array to align nodes before binary jumping.<br>• <b>K-th Ancestor:</b> Finding the ancestor at distance K from current node.<br>• <b>Complexity:</b> Query is always O(log N), making it very fast for many queries.<br>• <b>Applications:</b> Network routing in tree topologies and hierarchical lookups.",
        basic: "Identify the 2^0, 2^1, and 2^2 ancestors of a leaf in a 7-node tree.",
        nextLevel: "Implement Binary Lifting to find the LCA of two nodes in O(log N)."
    },
    "kadane's algorithm": {
        title: "Kadane's Algorithm",
        short: "• Optimal O(N) solution for finding the Maximum Subarray Sum.<br>• Uses dynamic programming to track the local maximum at each index.<br>• Works by deciding whether to carry previous sum or start anew.<br>• Eliminates the need for O(N²) nested loops for subarray sums.<br>• Foundational for financial analysis and stock trend detection.<br>• Can be modified to find minimum sum or handle circular arrays.",
        elaborative: "• <b>Core Logic:</b> <code>current_max = max(arr[i], current_max + arr[i])</code>.<br>• <b>Global Result:</b> <code>best_max = max(best_max, current_max)</code> tracked throughout.<br>• <b>All Negatives:</b> Standard version returns the max single element if all are < 0.<br>• <b>Indices:</b> Can track start/end of the subarray using temporary pointers.<br>• <b>Space:</b> Only O(1) auxiliary space needed for the maximum variables.<br>• <b>Circular:</b> Uses <code>TotalSum - Kadane(NegatedArray)</code> to find max circular sum.<br>• <b>2D Version:</b> Can be applied to matrices to find max sum rectangle in O(R²C).<br>• <b>Efficiency:</b> Strictly linear O(N) time complexity, single pass traversal.<br>• <b>Divide & Conquer:</b> Alternative O(N log N) approach exists but is slower.<br>• <b>Applications:</b> Finding most profitable consecutive period in business data.",
        basic: "Find the maximum subarray sum of [-2, 1, -3, 4, -1, 2, 1, -5, 4].",
        nextLevel: "Solve the 'Maximum Sum Circular Subarray' problem using Kadane."
    },
    "monotonic stack": {
        title: "Monotonic Stack",
        short: "• Stack variant where elements are kept in strictly increasing or decreasing order.<br>• Elements are popped when a new arrival violates the property.<br>• Used to find the 'next greater' or 'previous smaller' elements in O(N).<br>• Solves complex array range problems in linear time complexity.<br>• Every element is pushed and popped at most once total.<br>• Foundational for Stock Span and Histogram area problems.",
        elaborative: "• <b>Property:</b> If <code>a < b</code>, and <code>b</code> is added, elements <code>> b</code> are removed first.<br>• <b>Discovery:</b> The arrival that pops an element is its 'next' limiting factor.<br>• <b>Time:</b> Amortized O(N) because each item enters and leaves exactly once.<br>• <b>Decreasing Stack:</b> Finds next greater element (pops smaller elements).<br>• <b>Increasing Stack:</b> Finds next smaller element (pops larger elements).<br>• <b>Space:</b> O(N) memory requirement for storing the stack indices.<br>• <b>Indices:</b> Usually stores indices instead of values to calculate distances.<br>• <b>Wait:</b> Useful when a result depends on a future value in the sequence.<br>• <b>Logic:</b> Maintains a 'frontier' of candidates for a specific range property.<br>• <b>Applications:</b> Histogram area, water trapping, and stock span calculation.",
        basic: "Explain how to keep a stack monotonically increasing as you add [3, 1, 4, 2].",
        nextLevel: "Solve the 'Daily Temperatures' problem from LeetCode using a stack."
    },
    "monotonic queue": {
        title: "Monotonic Queue",
        short: "• Deque that maintains elements in a sorted order (usually decreasing).<br>• Facilitates O(1) retrieval of the maximum or minimum in a sliding window.<br>• Removes redundant elements that can never be the window result.<br>• Complexity is amortized O(N) for linear processing of the array.<br>• Essential for sliding window optimization in dynamic programming.<br>• Often implemented using a Deque (Double-Ended Queue).",
        elaborative: "• <b>Rule:</b> When adding <code>X</code>, remove all elements from back <code><= X</code>.<br>• <b>Front:</b> The front of the queue always contains the window's max/min.<br>• <b>Expiration:</b> Elements are removed from front when their index exits window.<br>• <b>Efficiency:</b> Each index is added and removed exactly once (linear time).<br>• <b>Comparison:</b> Faster than Priority Queue O(log W) for sliding windows.<br>• <b>Variation:</b> Can be used to optimize DP problems like 'Sliding Window DP'.<br>• <b>Bounded:</b> Used in systems where only the recent M elements matter.<br>• <b>Memory:</b> Uses O(W) space where W is the sliding window size.<br>• <b>Logic:</b> Only keeps 'useful' candidates that could be a future maximum.<br>• <b>Applications:</b> Sliding Window Maximum, Longest subarray with limit.",
        basic: "What is the front element of a decreasing monotonic queue for window [1, 3, -1]?",
        nextLevel: "Implement the 'Sliding Window Maximum' algorithm in O(N) time."
    },
    "next greater element": {
        title: "Next Greater Element (NGE)",
        short: "• For each item, find first element to its right that is larger.<br>• Solved efficiently in O(N) using a Monotonic Stack strategy.<br>• Returns -1 for elements that have no greater item following them.<br>• Can be extended to Circular arrays and Previous Greater Element.<br>• Core pattern for many building-block stack interview problems.<br>• Linear time complexity avoids naive O(N²) nested loops.",
        elaborative: "• <b>Strategy:</b> Iterate array. If <code>current > stack.top()</code>, current is NGE for top.<br>• <b>Stack usage:</b> Holds elements (or indices) that haven't found their NGE yet.<br>• <b>Circular:</b> Loop twice (0 to 2N-1) to handle wrapping back to index 0.<br>• <b>Variants:</b> Next Smaller, Previous Greater, and Previous Smaller elements.<br>• <b>Complexity:</b> Every item is processed exactly once in O(N) time.<br>• <b>Space:</b> O(N) stack plus the resulting output array storage.<br>• <b>Distance:</b> Often used to find 'Wait time' or 'Distance to next peak'.<br>• <b>Indices:</b> Storing indices allows calculating both value and position.<br>• <b>Logic:</b> Proactive search where current element 'claims' its predecessors' answers.<br>• <b>Application:</b> Weather forecasting peaks, stock market breakouts.",
        basic: "Find NGE for [4, 5, 2, 25] manually.",
        nextLevel: "Find Next Greater Element in a circular array with one pass + stack logic."
    },
    "stock span": {
        title: "Stock Span Problem",
        short: "• Calculates the consecutive number of days the price was <= today.<br>• Solved using a Monotonic Stack of indices in O(N) time.<br>• Span = <code>(Current Index - Index of Previous Greater Element)</code>.<br>• Foundational problem for understanding financial data analytics.<br>• Naive solution is O(N²); stack optimization reduces it to linear.<br>• Essential for identifying periods of resistance or growth in stocks.",
        elaborative: "• <b>Definition:</b> Span on day <code>i</code> is the maximum <code>k</code> such that prices on <code>i-k+1...i</code> are <code><= price[i]</code>.<br>• <b>Stack Logic:</b> Maintain a stack of indices with decreasing price values.<br>• <b>Calculation:</b> For current <code>i</code>, pop stack until <code>price[stack.top()] > price[i]</code>.<br>• <b>Edge Case:</b> If stack becomes empty, all previous prices were smaller.<br>• <b>Time:</b> Each index pushed/popped once; amortized O(N) performance.<br>• <b>Memory:</b> O(N) space for index stack and the resulting span array.<br>• <b>Wait Times:</b> Similar to NGE but focused on the 'length' of the sequence.<br>• <b>Interactive:</b> Can be solved online as prices arrive in a stream.<br>• <b>Analytics:</b> Highlights how long a price has stayed 'dominant'.<br>• <b>Efficiency:</b> Single pass over the data with minimal constant factors.",
        basic: "Calculate stock spans for prices [100, 80, 60, 70, 60, 75, 85].",
        nextLevel: "Implement an online StockSpan class with a <code>next(price)</code> method."
    },
    "histogram maximum area": {
        title: "Histogram Maximum Area",
        short: "• Finds the largest rectangular area possible in a given histogram.<br>• Solved in O(N) by finding Next/Prev Smaller elements for each bar.<br>• Width of rectangle is controlled by the nearest smaller neighbors.<br>• Uses a Monotonic Stack to find boundaries for all heights simultaneously.<br>• One of the most famous and frequent stack interview challenges.<br>• Can be extended to find the largest sub-matrix of 1s in a grid.",
        elaborative: "• <b>Core Idea:</b> For bar <code>i</code>, area is <code>height[i] * (NSE_right - PSE_left - 1)</code>.<br>• <b>NSE/PSE:</b> Next Smaller Element and Previous Smaller Element boundaries.<br>• <b>One-Pass:</b> Can be done in one scan using the stack's pop event logic.<br>• <b>Stack State:</b> Stores indices of bars in strictly increasing height order.<br>• <b>Popping:</b> When <code>current < top</code>, height is <code>top</code>, width is <code>current - new_top - 1</code>.<br>• <b>Finalization:</b> Add a zero-height bar at the end to flush the stack completely.<br>• <b>Complexity:</b> Linear time O(N) using the amortized stack analysis.<br>• <b>Space:</b> O(N) for the index stack and auxiliary boundary arrays.<br>• <b>Applications:</b> Image analysis, data visualization, and bin packing logic.<br>• <b>Logic:</b> Every bar is treated as the 'height' of a potential maximum rectangle.",
        basic: "Find the max area in a histogram with heights [2, 1, 5, 6, 2, 3].",
        nextLevel: "Solve 'Maximal Rectangle' in a 2D binary matrix using this algorithm."
    },
    "trapping rain water": {
        title: "Trapping Rain Water",
        short: "• Calculate how much water can be trapped between bars after rain.<br>• Solved using Two Pointers, Dynamic Programming, or a Stack.<br>• Optimal O(N) time and O(1) space with the Two Pointer approach.<br>• Water level at index <code>i</code> is <code>min(max_left, max_right) - height[i]</code>.<br>• Classic problem testing array manipulation and boundary tracking.<br>• Directly applicable to terrain mapping and volume calculations.",
        elaborative: "• <b>DP Approach:</b> Precompute <code>prefix_max</code> and <code>suffix_max</code> arrays (O(N) space).<br>• <b>Stack Approach:</b> Uses monotonic stack to find 'bottlenecks' between bars.<br>• <b>Two Pointers:</b> Keep <code>left_max</code> and <code>right_max</code> while converging pointers.<br>• <b>Boundaries:</b> Water only traps if both left and right have higher walls.<br>• <b>Formula:</b> Total += <code>max(0, water_level - current_height)</code> per index.<br>• <b>Complexity:</b> O(N) time for all methods; Two Pointers wins on space.<br>• <b>Volume:</b> Each unit of width is 1; total is sum of all trapped depths.<br>• <b>Edge Cases:</b> Flat terrain, strictly increasing, or strictly decreasing bars.<br>• <b>2D Version:</b> Complex priority-queue based solution for 3D terrain grids.<br>• <b>Efficiency:</b> Linear scan ensures performance for very large terrain input.",
        basic: "Calculate water trapped for heights [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].",
        nextLevel: "Explain why O(1) space is possible using the two-pointer technique."
    },
    "boyer-moore algorithm": {
        title: "Boyer-Moore Algorithm",
        short: "• Standard string search algorithm that performs faster than KMP.<br>• Skips large portions of the text by matching from right to left.<br>• Uses 'Bad Character' and 'Good Suffix' heuristics for jumps.<br>• O(N/M) best-case complexity (sub-linear time performance).<br>• Widely used in text editors, IDEs, and <code>grep</code> implementations.<br>• Most efficient for large alphabets and long pattern strings.",
        elaborative: "• <b>Matching Order:</b> Compares pattern against text from right to left.<br>• <b>Bad Character Rule:</b> Jumps based on the position of the mismatching char.<br>• <b>Good Suffix Rule:</b> Jumps to the next occurrence of the matching suffix.<br>• <b>Preprocessing:</b> Builds jump tables for both rules in O(M + Σ) time.<br>• <b>Complexity:</b> O(N+M) worst-case; much faster (sub-linear) on average data.<br>• <b>Large Alphabet:</b> Performs better as the number of unique chars increases.<br>• <b>Space:</b> O(Σ) for bad character table and O(M) for good suffix table.<br>• <b>Reliability:</b> Theoretical and practical winner for general text search.<br>• <b>Logic:</b> Aims to skip as many characters as safely possible after a fail.<br>• <b>Applications:</b> Large scale document scanning and keyword highlighting.",
        basic: "Identify the 'bad character' jump for pattern 'EXAMPLE' mismatches.",
        nextLevel: "Implement the Bad Character Heuristic of Boyer-Moore in JavaScript."
    },
    "suffix tree": {
        title: "Suffix Tree",
        short: "• Compressed trie containing all possible suffixes of a string.<br>• Answers complex string queries (repeats, search) in O(Length) time.<br>• Ukkonen's Algorithm can build it in linear O(N) time complexity.<br>• Every path from root to a leaf represents a unique suffix.<br>• Powerful tool for bioinformatics and genome sequencing analysis.<br>• Space complexity is O(N log Σ) or O(N) using clever compression.",
        elaborative: "• <b>Nodes:</b> Internal nodes have at least two children; edges store labels.<br>• <b>Search:</b> Find if pattern P is a substring in O(M) time independently of N.<br>• <b>Unique Substrings:</b> Counted easily by summing lengths of all edge labels.<br>• <b>Longest Repeated:</b> Deepest internal node represents the longest repeat.<br>• <b>LCS of Strings:</b> Build a generalized suffix tree for multiple strings.<br>• <b>Space Mapping:</b> More memory intensive than Suffix Arrays but faster queries.<br>• <b>Ukkonen:</b> Online algorithm that builds the tree char-by-char linearly.<br>• <b>Leaf Nodes:</b> Exactly N leaf nodes, one for each starting position.<br>• <b>Termination:</b> Often adds a unique char '$' to ensure all suffixes are leaves.<br>• <b>Applications:</b> Plagiarism detection and DNA pattern matching systems.",
        basic: "Draw a suffix tree for the string 'banana$'.",
        nextLevel: "Find the longest common substring of two strings using a Suffix Tree."
    },
    "rolling hash": {
        title: "Rolling Hash / Polynomial Hashing",
        short: "• Hashing technique that allows O(1) updates for a sliding window.<br>• Prevents re-calculating the hash from scratch for every window move.<br>• Foundation for Rabin-Karp search and duplicate detection.<br>• Calculated as a polynomial sum with a base (base) and prime (mod).<br>• Essential for fingerprinting large data blocks or files.<br>• Fast and memory-efficient but vulnerable to collisions if poorly tuned.",
        elaborative: "• <b>Formula:</b> <code>H = (S[0]*B^(k-1) + S[1]*B^(k-2) + ...) % M</code> calculation.<br>• <b>Update:</b> <code>new_H = (old_H - S[left]*B^(k-1)) * B + S[right]) % M</code> logic.<br>• <b>Collisions:</b> Probability is reduced by using very large primes (10^9+7).<br>• <b>Double Hashing:</b> Uses two different mods for near-zero collision risk.<br>• <b>Base Choice:</b> Base should be larger than the size of the alphabet Σ used.<br>• <b>Precomputation:</b> Powers of the base are precomputed to ensure O(1) performance.<br>• <b>Bitwise:</b> Some variants use Mersenne primes for faster bit manipulation.<br>• <b>Space:</b> O(1) auxiliary space beyond the storage for the hash values.<br>• <b>Logic:</b> Treats strings as numbers in base B for mathematically unique IDs.<br>• <b>Applications:</b> Finding identical blocks in large files (Rsync algorithm).",
        basic: "Calculate the base-10 rolling hash for '123' then shift it to '234'.",
        nextLevel: "Implement a double polynomial hashing class to avoid collisions."
    },
    "palindrome algorithms": {
        title: "Palindrome Algorithms (Manacher's)",
        short: "• Specialized techniques for finding palindromic substrings/sequences.<br>• Manacher's Algorithm finds the longest palindromic substring in O(N).<br>• Avoids redundant checks by using the symmetry of palindromes.<br>• Handles both even and odd length palindromes with a simple trick.<br>• Far more efficient than the naive O(N²) center-expansion method.<br>• Fundamental for sequence analysis and advanced string logic.",
        elaborative: "• <b>Preprocessing:</b> Insert delimiters (e.g., '#') between all characters.<br>• <b>Radius Array:</b> <code>P[i]</code> stores the radius of palindrome centered at <code>i</code>.<br>• <b>Mirroring:</b> <code>P[i] = min(P[mirror], Right - i)</code> (Uses previous work).<br>• <b>Center/Right:</b> Keeps track of the rightmost reaching palindrome found.<br>• <b>Complexity:</b> Amortized linear O(N) because the boundary only expands.<br>• <b>Odd/Even:</b> The '#' trick turns all palindromes into odd-length ones.<br>• <b>Longest:</b> The maximum value in <code>P</code> gives the length and location.<br>• <b>Substrings:</b> Total palindromic substrings = sum of <code>(P[i] + 1) / 2</code>.<br>• <b>Space:</b> O(N) extra space for the preprocessed string and radius array.<br>• <b>Comparison:</b> Naive is easiest but Manacher is essential for performance.",
        basic: "Find all palindromic substrings of 'aba' using center expansion.",
        nextLevel: "Implement Manacher's Algorithm to find the longest palindrome in O(N)."
    },
    "tabulation": {
        title: "Tabulation (Bottom-Up DP)",
        short: "• Dynamic programming technique that fills a table iteratively.<br>• Solves subproblems first and uses them to build larger answers.<br>• Follows a 'Bottom-Up' approach, avoiding recursion overhead.<br>• Usually more memory efficient than memoization due to array order.<br>• Essential for problems where all subproblems must be solved.<br>• Optimal for competitive programming and performance-critical DP.",
        elaborative: "• <b>Base Case:</b> Start by filling the simplest possible states (e.g., table[0]).<br>• <b>Iteration:</b> Use a loop (or nested loops) to progress through states.<br>• <b>State Transition:</b> <code>dp[i] = function(dp[previous states])</code> logic.<br>• <b>Space Optimization:</b> Often only the last few rows/columns are needed.<br>• <b>Performance:</b> No recursion depth limits or function call stack costs.<br>• <b>Comparison:</b> Memoization is better if only a few states are needed.<br>• <b>Memory Layout:</b> Sequential access is highly CPU-cache friendly.<br>• <b>Dependency Graph:</b> Subproblems must be solved in topological order.<br>• <b>Applications:</b> Knapsack, LCS, Matrix Chain Multiplication, Paths in Grid.<br>• <b>Logic:</b> Thinking about the problem as a sequence of small additions.",
        basic: "Solve the Fibonacci sequence using a 1D tabulation array.",
        nextLevel: "Solve the '0/1 Knapsack' problem using a 2D bottom-up table."
    },
    "interval scheduling": {
        title: "Interval Scheduling",
        short: "• Greedy algorithm for selecting maximum non-overlapping intervals.<br>• Always picks the interval that finishes earliest (Earliest Finish Time).<br>• O(N log N) complexity due to sorting by end times.<br>• Provides the optimal solution for the classic meeting room problem.<br>• Foundational for resource allocation and task management systems.<br>• Simple, elegant, and mathematically provable greedy strategy.",
        elaborative: "• <b>Sorting:</b> Initial step must sort intervals by their <code>end</code> time.<br>• <b>Greedy Choice:</b> After sorting, pick the first interval and skip overlapping ones.<br>• <b>Overlap:</b> Interval <code>B</code> overlaps <code>A</code> if <code>B.start < A.finish</code>.<br>• <b>Prove:</b> Switching the earliest finisher for any other only hurts the timeline.<br>• <b>Variants:</b> Weighted interval scheduling (requires DP solution).<br>• <b>Interval Partitioning:</b> Finding the min rooms needed for all meetings.<br>• <b>Space:</b> O(1) beyond sorting if modify-in-place is allowed.<br>• <b>Time:</b> O(N log N) dominated by the initial sorting of task objects.<br>• <b>Applications:</b> CPU task scheduling, hospital bed management.<br>• <b>Efficiency:</b> Extremely fast for processing thousands of scheduled tasks.",
        basic: "Select max meetings from [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9)].",
        nextLevel: "Solve 'Interval List Intersections' where you find overlapping segments."
    },
    "interval merging": {
        title: "Interval Merging",
        short: "• Merges overlapping or contiguous intervals into a single range.<br>• O(N log N) complexity from sorting intervals by their start times.<br>• Essential for consolidating time slots or managing calendar data.<br>• Result is a list of strictly disjoint intervals in sorted order.<br>• Used in SQL range joins and memory management allocations.<br>• Linear scan O(N) is performed after the initial sort step.",
        elaborative: "• <b>Sorting:</b> Sort the intervals primarily by their <code>start</code> coordinate.<br>• <b>Merging:</b> If <code>current.start <= previous.end</code>, they are merged.<br>• <b>New End:</b> The merged interval's end is <code>max(previous.end, current.end)</code>.<br>• <b>Disjoint:</b> If no overlap, the previous interval is finalized and added to results.<br>• <b>Comparison:</b> Different from scheduling as we want to 'keep everything'.<br>• <b>Space:</b> O(N) for the resulting merged interval collection.<br>• <b>Logic:</b> Sweeping across the timeline and 'gluing' overlapping pieces.<br>• <b>In-Place:</b> Can be done in O(1) extra space if overwriting input array.<br>• <b>Applications:</b> Merge busy periods, solve 'Insert Interval' problem.<br>• <b>Efficiency:</b> Standard O(N log N) approach is the most stable and fast.",
        basic: "Merge the intervals [[1, 3], [2, 6], [8, 10], [15, 18]].",
        nextLevel: "Implement 'Insert Interval' where you add a new range into a merged set."
    },
    "sweep line / mo's algorithm": {
        title: "Sweep Line & Mo's Algorithm",
        short: "• Sweep Line: Vertical line moving across plane to solve geometry.<br>• Mo's Algorithm: Square root decomposition for offline range queries.<br>• Sweep Line O(N log N) handles overlaps, intersections, and hulls.<br>• Mo's O((N+Q)√N) processes many array queries by reordering them.<br>• Advanced techniques for competitive programming and geometry.<br>• Essential for solving range property problems that aren't associative.",
        elaborative: "• <b>Sweep Logic:</b> Sort points/events by X; process in order with a set/tree.<br>• <b>Events:</b> 'Start' and 'End' of an object are the main points of interest.<br>• <b>Mo's Concept:</b> Divide array into sqrt(N) blocks. Sort queries by (block, R).<br>• <b>Add/Remove:</b> Move L, R pointers between queries and update answer incrementally.<br>• <b>Associativity:</b> Mo's works for non-associative ops (like 'count distinct').<br>• <b>Space:</b> O(N) for coordinates and O(Q) for storing the query answers.<br>• <b>Complexity (Sweep):</b> O(N log N) due to event sorting and balanced tree search.<br>• <b>Complexity (Mo's):</b> O((N+Q)*√N) using the block-sorting reordering trick.<br>• <b>Applications:</b> Line intersection, 2D range sum, distinct elements in range.<br>• <b>Trade-off:</b> Mo's is offline (queries must be known first), sweep is online.",
        basic: "Explain how a Sweep Line finds the union area of overlapping rectangles.",
        nextLevel: "Solve the 'Count Distinct Elements' in multiple ranges using Mo's Algorithm."
    },
    "order statistics": {
        title: "Order Statistics (Kth Element)",
        short: "• Finding the K-th smallest or largest element in an unsorted list.<br>• QuickSelect provides O(N) average time complexity performance.<br>• Median Finding is a special case of Order Statistics where K = N/2.<br>• Deterministic O(N) exists (Median of Medians) but is complex.<br>• Essential for data analysis, percentiles, and selection logic.<br>• Can be done in O(N log K) using a Max-Heap for the smallest K.",
        elaborative: "• <b>QuickSelect:</b> Pivot-based partitioning like QuickSort but only recurses on one side.<br>• <b>Partitioning:</b> Standard Lomuto or Hoare scheme used to move elements.<br>• <b>Worst Case:</b> O(N²) for QuickSelect with poor pivots; mitigated by randomization.<br>• <b>Median of Medians:</b> Divides array into groups of 5 to pick a 'good' pivot.<br>• <b>Sorting:</b> Simple O(N log N) solution is reliable but slower than QuickSelect.<br>• <b>Heap Approach:</b> Best for Top-K or Bottom-K when K is very small.<br>• <b>Binary Search:</b> Can be used on the value range for some datasets.<br>• <b>Space:</b> O(1) iterative QuickSelect or O(K) for the heap-based approach.<br>• <b>Applications:</b> Finding 90th percentile, median, or top 10 scores.<br>• <b>Efficiency:</b> Linear average time makes it suitable for massive data streams.",
        basic: "Find the 3rd smallest element in [7, 10, 4, 3, 20, 15] using QuickSelect.",
        nextLevel: "Implement 'Median of Medians' to ensure O(N) worst-case selection performance."
    },
    "consistent hashing": {
        title: "Consistent Hashing",
        short: "• Hashing scheme for distributed systems where node count changes.<br>• Minimizes data reshuffling when servers are added or removed.<br>• Maps both data keys and servers to a virtual 'Hash Ring' circle.<br>• Only K/N keys need remapping on average (K=keys, N=servers).<br>• Essential for load balancing, CDNs, and distributed databases.<br>• Uses 'Virtual Nodes' to ensure even distribution of data loads.",
        elaborative: "• <b>Hash Ring:</b> Think of a clock with values from 0 to 2^32 - 1 closing in loop.<br>• <b>Server Mapping:</b> Servers are hashed to locations on the circle ring.<br>• <b>Data Mapping:</b> Key X is handled by the first server clockwise from hash(X).<br>• <b>Node Removal:</b> Only keys from the removed node move to the next neighbor.<br>• <b>Virtual Nodes:</b> One server maps to many ring points to prevent 'hot spots'.<br>• <b>Efficiency:</b> Prevents massive data migrations during system scaling events.<br>• <b>Space:</b> O(N) to store server positions in a sorted list or tree.<br>• <b>Time:</b> O(log N) to find the server for a key using binary search.<br>• <b>Applications:</b> Amazon Dynamo, Apache Cassandra, Memcached clusters.<br>• <b>Scalability:</b> Enables adding millions of nodes with minimal disruption.",
        basic: "What happens when a new server is added to a Consistent Hashing ring?",
        nextLevel: "Explain why Virtual Nodes improve load balancing in distributed hash rings."
    },
    "bipartite matching": {
        title: "Bipartite Matching",
        short: "• Finding matches between two disjoint sets of nodes in a graph.<br>• Maximum Bipartite Matching is the largest possible set of pairs.<br>• Solved using augmenting paths or converting to a Max Flow problem.<br>• Hopcroft-Karp algorithm is the fastest for unweighted matching.<br>• Essential for task assignment, dating apps, and resource pairing.<br>• Only applies if the graph has no odd-length internal cycles.",
        elaborative: "• <b>Bipartite Graph:</b> Nodes can be divided into Left (L) and Right (R) sets.<br>• <b>Matching Set:</b> Edges where no two share a vertex in common.<br>• <b>Augmenting Path:</b> Path starting/ending at unmated nodes that toggles matching.<br>• <b>Berge's Lemma:</b> A matching is maximum if it has no augmenting paths.<br>• <b>Kuhn's Algorithm:</b> DFS-based approach to find augmenting paths in O(VE).<br>• <b>Hall's Marriage Theorem:</b> Mathematical condition for a 'perfect' matching.<br>• <b>Weighted:</b> Solving using Hungarian Algorithm or Min-Cost Max-Flow.<br>• <b>Complexity:</b> O(VE) for simple DFS; O(E√V) for Hopcroft-Karp efficiency.<br>• <b>Applications:</b> Job assignment to candidates, stable marriage problems.<br>• <b>Logic:</b> Iteratively improve matching by finding paths that flip edges.",
        basic: "Check if a 4-node square graph is bipartite and find a max matching.",
        nextLevel: "Solve 'Maximum Bipartite Matching' using the Max Flow algorithm."
    },
    "a* search": {
        title: "A* Search Algorithm",
        short: "• Informed search algorithm using heuristics to find the shortest path.<br>• <code>f(n) = g(n) + h(n)</code> (Cost so far + Estimated cost to Goal).<br>• Best for pathfinding in games and robotics where target is known.<br>• More efficient than Dijkstra because it 'aims' toward the target.<br>• Guaranteed to find shortest path if heuristic is 'admissible'.<br>• Uses a Priority Queue (Open Set) to explore nodes greedily.",
        elaborative: "• <b>G-Cost:</b> The measured distance from the starting node to current node.<br>• <b>H-Cost (Heuristic):</b> Estimate like Manhattan distance or Euclidean distance.<br>• <b>Admissibility:</b> Heuristic must never overestimate the actual distance to goal.<br>• <b>Consistency:</b> Ensures that path to a node is optimal when it's first visited.<br>• <b>Complexity:</b> Worst-case is O(E) but much faster in practice than BFS.<br>• <b>Open/Closed Sets:</b> Manages nodes to be visited and nodes already settled.<br>• <b>Grid Maps:</b> Ideal for choosing the right diagonal or horizontal moves.<br>• <b>Path Reconstruction:</b> Uses parent pointers to backtrack from goal to start.<br>• <b>Memory:</b> Stores all generated nodes, which can be memory intensive.<br>• <b>Applications:</b> NPC movement in RPGs, automated vacuum cleaners, GPS.",
        basic: "Calculate f(n) for a node with g=5 and h=10 (Manhattan distance).",
        nextLevel: "Explain the difference between Manhattan and Euclidean heuristics for A*."
    },
    "flood fill / grid bfs": {
        title: "Flood Fill & Grid BFS",
        short: "• Traversal algorithms for finding connected regions in a 2D grid.<br>• Flood Fill: Used in 'Paint' buckets to fill an area with a color.<br>• Grid BFS: Finds the shortest distance in a maze or unweighted grid.<br>• Explores neighboring cells (4-way or 8-way) starting from a pixel.<br>• Essential for image processing, game AI, and pathfinding logic.<br>• Low time complexity O(Rows * Cols) as each cell is visited once.",
        elaborative: "• <b>DFS (Recursive):</b> Easiest way to write Flood Fill but risks stack overflow.<br>• <b>BFS (Queue):</b> Best for finding shortest path in mazes without weights.<br>• <b>8-way:</b> Includes diagonal neighbors; <b>4-way:</b> Only up, down, left, right.<br>• <b>Visited Grid:</b> Prevents re-visiting cells and entering infinite cycles.<br>• <b>Boundary:</b> Check <code>0 <= r < R</code> and <code>0 <= c < C</code> before accessing.<br>• <b>Island Count:</b> Variation where you count clusters of a specific value.<br>• <b>Complexity:</b> Strictly linear with respect to the number of cells O(N)..<br>• <b>Space:</b> O(N) for the queue/stack or visited boolean grid array.<br>• <b>Applications:</b> Game of Life, MineSweeper, Image segmentation (Magic Wand).<br>• <b>Logic:</b> Propagating a property from a source cell to all reachable nodes.",
        basic: "Implement a recursive Flood Fill function in 15 lines of code.",
        nextLevel: "Find the distance to the nearest '0' for every '1' in a binary matrix."
    },
    "randomized algorithms": {
        title: "Randomized Algorithms",
        short: "• Use random numbers in logic to achieve better average performance.<br>• Las Vegas: Always correct, but time complexity is probabilistic.<br>• Monte Carlo: Correctness is probabilistic, but time is deterministic.<br>• Prevents worst-case scenarios for algorithms like QuickSort/Select.<br>• Essential for prime testing, cryptography, and large data sampling.<br>• Foundational for Google PageRank and Modern Physics simulations.",
        elaborative: "• <b>Las Vegas Example:</b> Randomized QuickSort (always sorts correctly).<br>• <b>Monte Carlo Example:</b> Miller-Rabin Primality test (may have false positive).<br>• <b>Success Probability:</b> Can be increased to near 100% by repeating the test.<br>• <b>Worst Case:</b> Randomization breaks patterns that cause O(N²) regressions.<br>• <b>Reservoir Sampling:</b> Picking a random item from a stream of unknown size.<br>• <b>Fisher-Yates:</b> Optimal O(N) algorithm for shuffling an array randomly.<br>• <b>Hashing:</b> Perfect hashing uses randomization to avoid all collisions.<br>• <b>Time:</b> Focus is on 'expected' time complexity rather than absolute.<br>• <b>Applications:</b> Load balancing, finding medians, and skip list heights.<br>• <b>Logic:</b> Trusting probability to avoid 'data-specific' performance traps.",
        basic: "Explain the difference between Las Vegas and Monte Carlo algorithms.",
        nextLevel: "Implement the Fisher-Yates shuffle algorithm for an array of N items."
    },
    "data compression": {
        title: "Data Compression Algorithms",
        short: "• Algorithms to reduce data size while preserving information.<br>• Lossless: Reconstruct original data exactly (Huffman, LZ77, LZW).<br>• Lossy: Approximate original data to save more space (JPEG, MP3).<br>• Relies on identifying patterns and redundancy within data streams.<br>• Essential for internet transmission, storage systems, and files.<br>• Bit-level manipulation is the core engine for all compression.",
        elaborative: "• <b>RLE:</b> Run-Length Encoding replaces repeated chars with (count, char).<br>• <b>Dictionary Based:</b> LZ77/LZW replaces repeated strings with pointers.<br>• <b>Entropy:</b> Shannon's limit defines the theoretical max compression.<br>• <b>Burrows-Wheeler:</b> Transformation used to group similar characters together.<br>• <b>Arithmetic Coding:</b> More powerful (and complex) than Huffman coding.<br>• <b>Delta Coding:</b> Storing the difference between items instead of the items.<br>• <b>Complexity:</b> Heavy on the compressor side, fast for the decompressor.<br>• <b>Stability:</b> Small changes in input can lead to large changes in compressed size.<br>• <b>Applications:</b> GIT (delta), ZIP (DEFLATE), Web (Gzip/Brotli).<br>• <b>Quantization:</b> The main step in lossy compression that reduces precision.",
        basic: "Explain Run-Length Encoding with an example like 'WWWWBB'.",
        nextLevel: "Describe how the LZW algorithm builds its dictionary during encoding."
    },
    "bubble sort": {
        title: "Bubble Sort",
        short: "• Simplest sorting algorithm that repeatedly swaps adjacent elements.<br>• In each pass, the largest unsorted element 'bubbles up' to its correct position.<br>• Time complexity is O(N²) in average and worst cases.<br>• Space complexity is O(1) as it sorts elements in-place.<br>• Stable sort, meaning it preserves the relative order of equal elements.<br>• Highly inefficient for large datasets but easy to understand and implement.",
        elaborative: "• <b>Mechanism:</b> Compares <code>arr[j]</code> and <code>arr[j+1]</code>; swaps if <code>arr[j] > arr[j+1]</code>.<br>• <b>Optimization:</b> Use a flag to stop if no swaps occur in a pass (Best case O(N)).<br>• <b>Passes:</b> Requires N-1 passes to guarantee the entire array is sorted.<br>• <b>Adaptive:</b> Can be made adaptive by detecting if the array is already sorted.<br>• <b>Complexity:</b> Average and Worst cases are both O(N²) quadratic time.<br>• <b>In-place:</b> Does not require any additional storage beyond a temporary swap variable.<br>• <b>Visual:</b> Often used to teach the basic concept of algorithmic comparisons.<br>• <b>Limitation:</b> Too slow for practical use where faster sorts like Quick/Merge are available.<br>• <b>Variation:</b> Cocktail Shaker Sort is a bidirectional version of Bubble Sort.<br>• <b>Logic:</b> Relies on the property that the largest element always moves to the end in 1 pass.",
        basic: "Sort the array [5, 1, 4, 2, 8] using Bubble Sort manually.",
        nextLevel: "Explain why Bubble Sort is O(N) in the best-case scenario with optimization."
    },
    "selection sort": {
        title: "Selection Sort",
        short: "• Sorts by repeatedly finding the minimum element from the unsorted part.<br>• Maintains two subarrays: already sorted and remaining unsorted.<br>• Time complexity is O(N²) for all cases (best, average, worst).<br>• Performs fewer swaps compared to Bubble Sort (O(N) swaps).<br>• In-place sorting algorithm with O(1) auxiliary space complexity.<br>• Not a stable sort by default due to long-distance swaps.",
        elaborative: "• <b>Algorithm:</b> Iteratively selects the smallest element and places it at the start.<br>• <b>Swaps:</b> Exactly N-1 swaps are performed in total, regardless of data distribution.<br>• <b>Complexity:</b> Strictly O(N²) because it always scans the entire unsorted portion.<br>• <b>Stability:</b> Standard implementation is unstable (swapping can skip equal values).<br>• <b>Hybrid:</b> Rarely used in practice but good for minimizing write operations.<br>• <b>Comparison:</b> Usually faster than Bubble Sort due to significantly fewer swaps.<br>• <b>Logic:</b> Assumes index <code>i</code> should hold the i-th smallest element of the set.<br>• <b>Space:</b> O(1) since it only requires memory for indices and a temp variable.<br>• <b>Applications:</b> Used when memory is extremely limited or write cost is high.<br>• <b>Heapsort Link:</b> Can be viewed as a basic version of Heapsort without a tree.",
        basic: "Identify the minimum element and swap it in [64, 25, 12, 22, 11].",
        nextLevel: "Explain why Selection Sort is considered unstable with a duplicate example."
    },
    "insertion sort": {
        title: "Insertion Sort",
        short: "• Builds the sorted array one item at a time by inserting elements.<br>• Efficient for small datasets or arrays that are already partially sorted.<br>• Time complexity is O(N²) in worst case but O(N) in the best case.<br>• Stable sort that maintains relative order of equal numeric elements.<br>• In-place sorting with O(1) extra memory requirement.<br>• Used by more complex algorithms (like Timsort) for small partitions.",
        elaborative: "• <b>Concept:</b> Similar to sorting cards in your hand; insert current into sorted bank.<br>• <b>Shifting:</b> Elements larger than the key are shifted one position to the right.<br>• <b>Best Case:</b> O(N) if the array is already sorted (one check per element).<br>• <b>Worst Case:</b> O(N²) if the array is sorted in reverse order.<br>• <b>Stability:</b> Stable, as it only moves elements when they are strictly smaller/larger.<br>• <b>Practicality:</b> Very efficient for small N (N < 20) in modern computer systems.<br>• <b>Online:</b> Can sort the array as it receives items one by one in a stream.<br>• <b>Cache:</b> High spatial locality since it processes elements sequentially.<br>• <b>Adaptivity:</b> Performance improves directly with the level of pre-sortedness.<br>• <b>Logic:</b> Invariants: At index <code>i</code>, all elements from <code>0..i-1</code> are sorted.",
        basic: "Manually sort [12, 11, 13, 5, 6] using the Insertion Sort method.",
        nextLevel: "Explain why Insertion Sort is preferred over QuickSort for small arrays."
    },
    "merge sort": {
        title: "Merge Sort",
        short: "• Divide & Conquer algorithm that splits the array into single elements.<br>• Merges sorted subarrays back together in O(N log N) time.<br>• Guaranteed O(N log N) performance in all cases (best/avg/worst).<br>• Stable sort that preserves the relative order of duplicate items.<br>• Not in-place; requires O(N) extra space for the temporary subarrays.<br>• Highly efficient for large datasets and linked list implementations.",
        elaborative: "• <b>Divide:</b> Recursively split the array at the middle until size becomes 1.<br>• <b>Conquer:</b> A base case of size 1 is inherently sorted.<br>• <b>Combine:</b> The <code>merge()</code> step joins two sorted arrays into one larger sorted array.<br>• <b>Efficiency:</b> Balanced recursion tree of height log N; merge step takes O(N).<br>• <b>Stability:</b> Maintains stability by picking left element first if values are equal.<br>• <b>Parallelism:</b> Easily parallelizable because subproblems are independent.<br>• <b>External Sort:</b> Primary choice for sorting data that doesn't fit in RAM.<br>• <b>Complexity:</b> Strictly O(N log N) but constant factor is higher than QuickSort.<br>• <b>Space:</b> O(N) auxiliary space needed for merging, which is its main drawback.<br>• <b>Recursive:</b> Depth of recursion is O(log N), requiring stack space.",
        basic: "Diagram the split and merge steps for array [38, 27, 43, 3, 9, 82, 10].",
        nextLevel: "Explain why Merge Sort is preferred for sorting Linked Lists over QuickSort."
    },
    "quick sort": {
        title: "Quick Sort",
        short: "• Divide & Conquer algorithm that partitions array around a 'pivot'.<br>• Average time complexity is O(N log N) with low constant factors.<br>• In-place sorting that uses minimal extra memory (O(log N) stack).<br>• Worst-case performance is O(N²) if pivot selection is consistently poor.<br>• Generally faster in practice than Merge Sort due to better cache usage.<br>• Not a stable sort; relative order of equals can change during partition.",
        elaborative: "• <b>Pivot:</b> Picking an element (first, last, random, or median) to split the set.<br>• <b>Partition:</b> Move elements smaller than pivot to left, larger to right.<br>• <b>Hoare vs Lomuto:</b> Two common partitioning schemes with different swap logic.<br>• <b>Best Case:</b> O(N log N) when every pivot splits the array into two equal halves.<br>• <b>Worst Case:</b> O(N²) when the pivot is always the smallest or largest element.<br>• <b>Optimization:</b> Use 'Median of Three' or Random Pivot to avoid worst-case scenarios.<br>• <b>Cache Locality:</b> Very high because it works on contiguous memory segments.<br>• <b>Space:</b> In-place swaps make it memory efficient (recursive stack is O(log N)).<br>• <b>Tail Recursion:</b> Can be optimized to reduce stack depth to absolute minimum.<br>• <b>Logic:</b> Relies on the fact that once partitioned, the pivot is in its final spot.",
        basic: "Sort [10, 80, 30, 90, 40, 50, 70] using the last element as the pivot.",
        nextLevel: "Discuss the 'Median of Three' pivot selection strategy for QuickSort."
    },
    "linear search": {
        title: "Linear Search",
        short: "• Simplest search algorithm that checks every element sequentially.<br>• Works on both sorted and unsorted collections of data.<br>• Time complexity is O(N) as it may scan all elements.<br>• Space complexity is O(1) since it uses no extra memory.<br>• Best case is O(1) if the target is the very first element.<br>• Practical for small lists or data with no specific order.",
        elaborative: "• <b>Algorithm:</b> Starts from index 0 and compares target with each <code>arr[i]</code>.<br>• <b>Termination:</b> Stops as soon as match is found or end of array is reached.<br>• <b>Versatility:</b> Can be applied to Linked Lists, Arrays, and Streams.<br>• <b>No Overhead:</b> No preprocessing needed; immediate search on raw data.<br>• <b>Efficiency:</b> For N < 100, hardware constant factors often beat Binary Search.<br>• <b>Unordered:</b> Only way to find an element in a completely random collection.<br>• <b>Logic:</b> Exhaustive search ensuring correctness for any valid input set.<br>• <b>Complexity:</b> Average case requires N/2 comparisons (still linear O(N)).<br>• <b>Multi-match:</b> Can easily be modified to find 'all' occurrences of a target.<br>• <b>Optimization:</b> 'Move to Front' heuristic can speed up future searches for same key.",
        basic: "Find the index of number 55 in [23, 11, 55, 12, 43].",
        nextLevel: "Explain why Linear Search is sometimes faster than Binary Search for small arrays."
    },
    "binary search": {
        title: "Binary Search",
        short: "• Efficient search algorithm for sorted arrays using split logic.<br>• Repeatedly halves the search interval to find the target.<br>• Time complexity is logarithmic O(log N) — incredibly fast.<br>• Requires the data to be sorted and provides random access (index).<br>• Space complexity is O(1) for iterative and O(log N) for recursive.<br>• Essential for large-scale data systems and competitive math.",
        elaborative: "• <b>Mechanism:</b> Compare target to <code>mid</code>; if target is smaller, search left half.<br>• <b>Precondition:</b> Must be sorted. If not, sorting cost (N log N) must be paid first.<br>• <b>Mid Calculation:</b> Use <code>low + (high-low)/2</code> to prevent integer overflow errors.<br>• <b>Complexity:</b> Reduces search space from N to 1 in roughly log₂(N) steps.<br>• <b>Boundaries:</b> Crucial for checking if <code>low <= high</code> to avoid infinite loops.<br>• <b>Lower/Upper Bound:</b> Can be modified to find first/last occurrence in sorted duplicates.<br>• <b>Binary Search on Answer:</b> Used to find max/min possible result in monotonic ranges.<br>• <b>Optimization:</b> Frequently used to optimize O(N²) problems to O(N log N).<br>• <b>Space:</b> Iterative version is strictly O(1) auxiliary space beyond input.<br>• <b>Applications:</b> Database indexing, library systems, Git bisect, and square root calc.",
        basic: "Find target 22 in sorted array [2, 5, 8, 12, 16, 22, 38, 56, 72].",
        nextLevel: "Implement 'First Occurrence' Binary Search in an array with duplicates."
    },
    "heap sort": {
        title: "Heap Sort",
        short: "• Comparison-based sorting technique based on Binary Heap data structure.<br>• Similar to Selection Sort but uses a Max-Heap to find min/max efficiently.<br>• Time complexity is O(N log N) for all cases (best, average, worst).<br>• In-place sorting algorithm with O(1) extra space complexity.<br>• Not a stable sort; relative order of equal elements may change.<br>• Very reliable performance with no worst-case O(N²) degradation.",
        elaborative: "• <b>Build Heap:</b> Turn the input array into a Max-Heap in O(N) time.<br>• <b>Sorting:</b> Repeatedly swap the root (max) with the last element and re-heapify.<br>• <b>Complexity:</b> Each of the N extractions takes O(log N) time, totaling O(N log N).<br>• <b>In-place:</b> Unlike Merge Sort, it doesn't need extra arrays for the merge step.<br>• <b>Heapify:</b> The downward bubbling process that restores the heap property.<br>• <b>Space:</b> O(1) since it swaps elements within the original array memory.<br>• <b>Memory:</b> Extremely memory efficient for large datasets that fit in RAM.<br>• <b>Comparison:</b> Usually slightly slower than QuickSort due to cache performance.<br>• <b>Applications:</b> Systems with tight memory limits and real-time processing.<br>• <b>Logic:</b> Utilizes the properties of a complete binary tree mapped to an array.",
        basic: "Build a Max-Heap from the array [4, 10, 3, 5, 1].",
        nextLevel: "Implement Heap Sort and explain why building the heap is O(N)."
    },
    "fenwick tree": {
        title: "Fenwick Tree (Binary Indexed Tree)",
        short: "• Efficient data structure for range sums and point updates.<br>• O(log N) for both update and prefix sum query operations.<br>• Much simpler to implement and uses less memory than Segment Trees.<br>• Based on the binary representation of indices for navigation.<br>• Ideal for dynamic frequency tables and inversion counting.<br>• Space complexity is O(N), identical to the original array size.",
        elaborative: "• <b>Binary Trick:</b> Uses <code>i & (-i)</code> to find the lowest set bit.<br>• <b>Update:</b> To update index <code>i</code>, move up the tree by adding <code>LSB(i)</code>.<br>• <b>Query:</b> To get sum up to <code>i</code>, move down the tree by subtracting <code>LSB(i)</code>.<br>• <b>Range Query:</b> <code>Sum(L, R)</code> is calculated as <code>Query(R) - Query(L-1)</code>.<br>• <b>Tree Structure:</b> Not a typical tree; it's an array where each cell is a partial sum.<br>• <b>Memory:</b> Only requires one array of size N+1 to store the tree values.<br>• <b>Comparison:</b> Faster than Segment Tree for simple range sum/point update tasks.<br>• <b>Limitation:</b> Harder to perform range updates (requires 2 BITs) or range max/min.<br>• <b>Construction:</b> Can be built in O(N) from an existing array.<br>• <b>Applications:</b> Counting inversions, 2D range queries, and cumulative frequencies.",
        basic: "Update an element and find the prefix sum using a BIT.",
        nextLevel: "Find the 'Inversion Count' of an array using a Fenwick Tree in O(N log N)."
    },
    "kruskal’s algorithm": {
        title: "Kruskal’s Algorithm (MST)",
        short: "• Greedy algorithm used to find the Minimum Spanning Tree (MST).<br>• Sorts all edges by weight and adds them if they don't form a cycle.<br>• Uses Disjoint Set Union (DSU) for efficient cycle detection.<br>• Complexity is O(E log E) or O(E log V) due to edge sorting.<br>• Works perfectly for sparse graphs where E is close to V.<br>• Produces an MST — a subgraph connecting all nodes with min weight.",
        elaborative: "• <b>Sorting:</b> First step is to sort all edges of the graph by their weight.<br>• <b>DSU Logic:</b> For each edge (u, v), check if <code>Find(u) == Find(v)</code>.<br>• <b>Union:</b> If they belong to different sets, add the edge to MST and Union them.<br>• <b>Cycle Prevention:</b> DSU ensures we never add an edge between already connected nodes.<br>• <b>Graph Type:</b> Used for undirected, weighted graphs specifically.<br>• <b>Space:</b> O(V) for the DSU parent/rank arrays and O(E) to store edges.<br>• <b>Complexity:</b> Sorting takes O(E log E); DSU operations are nearly amortized O(1).<br>• <b>Forest:</b> Can find a 'Minimum Spanning Forest' if the graph is disconnected.<br>• <b>Applications:</b> Network design, cluster analysis, and circuit layout.<br>• <b>Greedy Choice:</b> Always picks the smallest available edge that is 'safe'.",
        basic: "Identify the first three edges picked by Kruskal's for a given graph.",
        nextLevel: "Explain why DSU is essential for the efficiency of Kruskal's algorithm."
    },
    "prim’s algorithm": {
        title: "Prim’s Algorithm (MST)",
        short: "• Greedy algorithm for finding MST that grows from a starting node.<br>• Always adds the cheapest edge connecting the tree to a new node.<br>• Uses a Priority Queue (Min-Heap) to pick the next closest vertex.<br>• O(E log V) complexity using a heap; better for dense graphs.<br>• Similar to Dijkstra's algorithm but focused on total edge weight.<br>• Guaranteed to find a connected MST for connected graphs.",
        elaborative: "• <b>Starting point:</b> Pick any node to start; initialize its distance to 0, others to ∞.<br>• <b>Expansion:</b> In each step, pick node <code>u</code> with min distance not yet in MST.<br>• <b>Relaxation:</b> For each neighbor <code>v</code> of <code>u</code>, update <code>dist[v] = min(dist[v], weight(u, v))</code>.<br>• <b>Priority Queue:</b> Stores nodes with their current 'cheapest edge' distance to MST.<br>• <b>Dense Graphs:</b> With an Adjacency Matrix and no heap, it runs in O(V²).<br>• <b>Space:</b> O(V) for the keys/parents arrays and O(E+V) for adjacency list.<br>• <b>Complexity:</b> O(E log V) with a binary heap; O(E + V log V) with a Fibonacci heap.<br>• <b>Comparison:</b> Kruskal's is often easier to code, but Prim is faster for dense networks.<br>• <b>Logic:</b> Greedily extends the current component to the nearest neighbor.<br>• <b>Applications:</b> Laying pipelines, electrical grids, and telecommunications.",
        basic: "Manually trace Prim's algorithm starting from node 'A'.",
        nextLevel: "Compare Prim's vs Dijkstra's algorithm in terms of edge relaxation logic."
    },
    "sieve of eratosthenes": {
        title: "Sieve of Eratosthenes",
        short: "• Optimal O(N log log N) algorithm for finding all primes up to N.<br>• Efficiently marks non-prime numbers by iterating through multiples.<br>• Much faster than checking each number individually for primality.<br>• Uses a boolean array to store the state of each number.<br>• Foundational for number theory and cryptographic algorithms.<br>• Space complexity is O(N) to store the marks.",
        elaborative: "• <b>Algorithm:</b> Start from 2, mark all its multiples as false. Move to next true number.<br>• <b>Optimization:</b> Start marking multiples of <code>p</code> from <code>p*p</code> to avoid repeats.<br>• <b>Termination:</b> Loop only needs to go up to <code>√N</code> to identify all primes.<br>• <b>Complexity:</b> O(N log log N), which is extremely close to linear for practical N.<br>• <b>Memory:</b> One bit per number is sufficient (bitset) for large limits.<br>• <b>Segmented Sieve:</b> Variant used to find primes in a range [L, R] using O(√R) space.<br>• <b>Precomputation:</b> Crucial for solving problems requiring many prime checks.<br>• <b>Multiples:</b> Marking <code>2p, 3p, 4p...</code> is avoided by the <code>p*p</code> optimization.<br>• <b>Space:</b> O(N) memory is the main bottleneck for very large N (e.g., N > 10^8).<br>• <b>Applications:</b> Prime factorization, counting divisors, and number theory puzzles.",
        basic: "List all primes up to 30 using the Sieve method.",
        nextLevel: "Implement the 'Segmented Sieve' to find primes between 10^9 and 10^9 + 1000."
    },
    "suffix array": {
        title: "Suffix Array",
        short: "• Sorted array of all possible suffixes of a given string.<br>• Powerful tool for pattern matching and string analysis.<br>• Can be built in O(N log N) using prefix doubling techniques.<br>• Replaces Suffix Trees in many applications due to lower memory usage.<br>• Used with the LCP (Longest Common Prefix) array for complex queries.<br>• Memory complexity is O(N), storing only suffix starting indices.",
        elaborative: "• <b>Construction:</b> Sort suffixes alphabetically. Storing full strings is O(N² log N).<br>• <b>Optimized Build:</b> Sort by comparing prefixes of size 2^k (O(N log N log N) or O(N log N)).<br>• <b>Pattern Search:</b> Find any pattern P in string S in O(M log N) using Binary Search.<br>• <b>LCP Array:</b> Stores the length of the longest common prefix between adjacent suffixes.<br>• <b>String Queries:</b> Find number of distinct substrings in O(N) after building Suffix/LCP.<br>• <b>Longest Repeated:</b> Max value in the LCP array gives the longest repeated substring.<br>• <b>Space:</b> Much tighter than Suffix Tree (4*N bytes vs 20*N+ bytes).<br>• <b>Alphabets:</b> Performance is stable regardless of the alphabet size.<br>• <b>Library Usage:</b> Found in genome sequence tools and modern search indexing.<br>• <b>Logic:</b> Reducing 2D string problems into sorted 1D index problems.",
        basic: "Generate a Suffix Array for the string 'banana'.",
        nextLevel: "Find the 'Longest Common Substring' of two strings using Suffix Arrays."
    },
    "number theory": {
        title: "Number Theory (GCD, LCM, Modulo)",
        short: "• Branch of math dealing with integers and their properties.<br>• GCD (Greatest Common Divisor): Largest number dividing two integers.<br>• LCM (Least Common Multiple): Smallest number divisible by both.<br>• Modular Arithmetic: Handling remainders, crucial for cryptography.<br>• Euclidean Algorithm: Efficient way to find GCD in O(log(min(a,b))).<br>• Powers and Inverses: Modular Exponentiation and Multiplicative Inverses.",
        elaborative: "• <b>GCD Formula:</b> <code>gcd(a, b) = gcd(b, a % b)</code> (Euclid's algorithm).<br>• <b>LCM Link:</b> <code>LCM(a, b) = (a * b) / GCD(a, b)</code> identity.<br>• <b>Modular Exponentiation:</b> O(log N) method for <code>(base^exp) % mod</code> using bit logic.<br>• <b>Modulo Rules:</b> <code>(a+b)%m = (a%m + b%m)%m</code>; same for subtraction/multiplication.<br>• <b>Prime Factors:</b> Every integer > 1 has a unique prime factorization (FTM).<br>• <b>Euler's Totient (Φ):</b> Number of positive integers <= N that are coprime to N.<br>• <b>Fermat's Little Theorem:</b> <code>a^(p-1) ≡ 1 (mod p)</code> for prime p and a not div by p.<br>• <b>Chinese Remainder Theorem:</b> Solving systems of congruences for integers.<br>• <b>Complexity:</b> Euclid's algorithm is O(log N), making it extremely fast.<br>• <b>Applications:</b> RSA Encryption, hashing, and solving parity problems.",
        basic: "Find GCD of 48 and 18 using Euclidean algorithm.",
        nextLevel: "Implement 'Modular Inverse' using the Extended Euclidean Algorithm."
    },
    "bitmasking": {
        title: "Bitmasking",
        short: "• Using a single integer to represent a set or a state of Booleans.<br>• Each bit <code>i</code> represents whether the <code>i-th</code> item is in the set.<br>• Standard technique for solving small NP-hard problems with DP.<br>• O(1) set operations: Intersection (AND), Union (OR), Difference (XOR).<br>• Efficiently enumerates all 2^N subsets of a collection.<br>• Extremely space-efficient for state tracking in search algorithms.",
        elaborative: "• <b>Set Check:</b> <code>(mask >> i) & 1</code> checks if the i-th bit is set.<br>• <b>Set Bit:</b> <code>mask | (1 << i)</code> adds the i-th element to the set.<br>• <b>Clear Bit:</b> <code>mask & ~(1 << i)</code> removes the i-th element.<br>• <b>Subsets:</b> A number from 0 to 2^N - 1 marks every possible subset of N items.<br>• <b>Iterating Subsets:</b> <code>for (int s = mask; s > 0; s = (s - 1) & mask)</code> trick.<br>• <b>DP with Bitmask:</b> Solving TSP or Hamiltonian Path for N <= 20.<br>• <b>Memory:</b> One 32-bit int can store 32 boolean flags, saving massive bytes.<br>• <b>Speed:</b> Bitwise operations are executed in a single CPU cycle.<br>• <b>Logic:</b> Thinking of integers as binary strings representing membership.<br>• <b>Applications:</b> Sudoku solvers, game state storage, and subset sum optimization.",
        basic: "Represent the set {0, 2, 3} as a bitmask (integer).",
        nextLevel: "Solve the 'Traveling Salesman Problem' (TSP) using Bitmask DP for N=15."
    },













};

let dsaMode = 'short'; // Default mode
let activeSuggestionIdx = -1;

function setDSAMode(mode) {
    dsaMode = mode;
    const modes = ['short', 'long', 'basic', 'medium'];
    modes.forEach(m => {
        const el = document.getElementById(`mode-${m}`);
        if (el) {
            el.style.background = mode === m ? 'var(--accent)' : 'transparent';
            el.style.color = mode === m ? 'white' : 'var(--text-dim)';
        }
    });

    if (document.getElementById('dsa-results').style.display === 'block') {
        searchDSA();
    }
}

function filterDSASuggestions() {
    const input = document.getElementById('dsa-search-input');
    const box = document.getElementById('dsa-suggestion-box');
    const val = input.value.toLowerCase().trim();

    if (!val) {
        box.style.display = 'none';
        return;
    }

    // Only show topics that START with the typed characters
    const matches = Object.keys(dsaDatabase).filter(key => key.startsWith(val));

    if (matches.length > 0) {
        box.innerHTML = matches.map((m, i) => `
            <div class="suggestion-item" onclick="selectSuggestion('${m}')" data-index="${i}">
                ${m.charAt(0).toUpperCase() + m.slice(1)}
            </div>
        `).join('');
        box.style.display = 'block';
        activeSuggestionIdx = -1;
    } else {
        box.style.display = 'none';
    }
}

function selectSuggestion(topic) {
    const input = document.getElementById('dsa-search-input');
    input.value = topic.charAt(0).toUpperCase() + topic.slice(1);
    document.getElementById('dsa-suggestion-box').style.display = 'none';
    searchDSA();
}

function handleDSAKey(e) {
    const box = document.getElementById('dsa-suggestion-box');
    const items = box.querySelectorAll('.suggestion-item');

    if (box.style.display === 'block') {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeSuggestionIdx = (activeSuggestionIdx + 1) % items.length;
            updateActiveSuggestion(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeSuggestionIdx = (activeSuggestionIdx - 1 + items.length) % items.length;
            updateActiveSuggestion(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeSuggestionIdx >= 0) {
                items[activeSuggestionIdx].click();
            } else {
                searchDSA();
            }
        } else if (e.key === 'Escape') {
            box.style.display = 'none';
        }
    } else if (e.key === 'Enter') {
        searchDSA();
    }
}

function updateActiveSuggestion(items) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === activeSuggestionIdx);
        if (i === activeSuggestionIdx) item.scrollIntoView({ block: 'nearest' });
    });
}

function searchDSA() {
    const queryInput = document.getElementById('dsa-search-input');
    const query = queryInput.value.toLowerCase().trim();
    const results = document.getElementById('dsa-results');
    const empty = document.getElementById('dsa-empty');
    const box = document.getElementById('dsa-suggestion-box');

    if (!query) return;
    if (box) box.style.display = 'none';

    // --- COMPARISON ENGINE (X vs Y) ---
    if (query.includes(" vs ")) {
        const parts = query.split(" vs ").map(p => p.trim());
        const key1 = Object.keys(dsaDatabase).find(k => k === parts[0] || k.includes(parts[0]));
        const key2 = Object.keys(dsaDatabase).find(k => k === parts[1] || k.includes(parts[1]));

        if (key1 && key2) {
            const d1 = dsaDatabase[key1];
            const d2 = dsaDatabase[key2];
            results.className = "search-results-active";
            results.innerHTML = `
                <div style="max-width: 950px; margin: 0 auto;">
                    <h3 style="color: var(--accent); font-size: 2.2rem; font-family: 'Outfit'; text-align: center; margin-bottom: 30px;">
                        ${d1.title} <span style="color: #64748b; font-size: 1.2rem; margin: 0 15px;">VS</span> ${d2.title}
                    </h3>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(255,255,255,0.1); border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.4);">
                        <div style="background: #1e293b; padding: 25px; font-weight: 800; color: #94a3b8; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; text-align: center;">${d1.title}</div>
                        <div style="background: #1e293b; padding: 25px; font-weight: 800; color: #94a3b8; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; text-align: center;">${d2.title}</div>
                        
                        <!-- Row: Concept -->
                        <div style="background: #0f172a; padding: 30px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <div style="color: var(--accent); font-size: 0.7rem; font-weight: 900; margin-bottom: 10px;">CORE CONCEPT</div>
                            <div style="color: #cbd5e1; line-height: 1.6;">${d1.short.split('<br>')[0].replace('• ', '')}</div>
                        </div>
                        <div style="background: #0f172a; padding: 30px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <div style="color: var(--accent); font-size: 0.7rem; font-weight: 900; margin-bottom: 10px;">CORE CONCEPT</div>
                            <div style="color: #cbd5e1; line-height: 1.6;">${d2.short.split('<br>')[0].replace('• ', '')}</div>
                        </div>

                        <!-- Row: Best Case -->
                        <div style="background: #111827; padding: 30px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <div style="color: #10b981; font-size: 0.7rem; font-weight: 900; margin-bottom: 10px;">KEY ADVANTAGE</div>
                            <div style="color: #cbd5e1; line-height: 1.6;">${d1.elaborative.match(/•\s*<b>([^<]+)<\/b>/)?.[1] || "Efficiency in access"}</div>
                        </div>
                        <div style="background: #111827; padding: 30px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <div style="color: #10b981; font-size: 0.7rem; font-weight: 900; margin-bottom: 10px;">KEY ADVANTAGE</div>
                            <div style="color: #cbd5e1; line-height: 1.6;">${d2.elaborative.match(/•\s*<b>([^<]+)<\/b>/)?.[1] || "Efficiency in mutation"}</div>
                        </div>

                        <!-- Row: Summary Points -->
                        <div style="background: #0f172a; padding: 30px;">
                            <div style="color: #6366f1; font-size: 0.7rem; font-weight: 900; margin-bottom: 10px;">TECHNICAL SPECS</div>
                            <div style="font-size: 0.9rem; color: #94a3b8; line-height: 1.8;">${d1.short}</div>
                        </div>
                        <div style="background: #0f172a; padding: 30px;">
                            <div style="color: #6366f1; font-size: 0.7rem; font-weight: 900; margin-bottom: 10px;">TECHNICAL SPECS</div>
                            <div style="font-size: 0.9rem; color: #94a3b8; line-height: 1.8;">${d2.short}</div>
                        </div>
                    </div>
                </div>
            `;
            results.style.display = 'block';
            empty.style.display = 'none';
            return;
        }
    }

    const matchKey = Object.keys(dsaDatabase).find(key =>
        key === query || key.includes(query) || query.includes(key.replace(/s$/i, ''))
    );

    if (matchKey) {
        const data = dsaDatabase[matchKey];
        results.className = "search-results-active";

        if (dsaMode === 'short' || dsaMode === 'long') {
            // FULL-WIDTH CONCEPTUAL LAYOUT (No Sidebar)
            results.innerHTML = `
                <div style="max-width: 850px; margin: 0 auto;">
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 25px;">
                        <h3 id="dsa-title" style="color: var(--accent); font-size: 2.2rem; font-family: 'Outfit'; margin: 0;">${data.title}</h3>
                        <div style="height: 4px; width: 60px; background: var(--accent); border-radius: 2px;"></div>
                    </div>

                    <div style="background: rgba(255,255,255,0.02); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                        <div style="display: flex; align-items: center; gap: 10px; color: var(--accent); font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;">
                            <i class="fas fa-book-open"></i> Technical Breakdown ${dsaMode === 'long' ? '(Elaborative)' : '(Summary)'}
                        </div>
                        <div id="dsa-explanation" style="line-height: 1.9; color: #e2e8f0; font-size: 1.1rem;">
                            ${dsaMode === 'short' ? data.short : data.elaborative}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // PROBLEM FOCUS LAYOUT
            const isBasic = dsaMode === 'basic';
            const problemTitle = isBasic ? data.basic : data.nextLevel;
            const solutionMatter = isBasic ? (data.basicSolution || "Review standard implementations for this fundamental problem.") : (data.mediumSolution || "This is an advanced interview pattern. Explore optimal algorithmic strategies.");
            const accent = isBasic ? "#10b981" : "#6366f1";
            const bgAccent = isBasic ? "rgba(16, 185, 129, 0.05)" : "rgba(99, 102, 241, 0.05)";

            results.innerHTML = `
                <div style="max-width: 900px; margin: 0 auto;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">
                        <div>
                            <h3 style="color: ${accent}; font-size: 2.2rem; font-family: 'Outfit'; margin: 0;">Coding Problem: ${isBasic ? 'Basic' : 'Medium'}</h3>
                            <p style="color: var(--text-dim); margin-top: 5px;">Topic: ${data.title}</p>
                        </div>
                        <div style="background: ${bgAccent}; color: ${accent}; padding: 8px 20px; border-radius: 20px; font-weight: 800; font-size: 0.75rem; border: 1px solid ${accent}44;">
                            ${isBasic ? 'LEVEL: EASY' : 'LEVEL: INTERMEDIATE'}
                        </div>
                    </div>

                    <div style="background: #111827; border-radius: 24px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.4);">
                        <div style="padding: 35px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <h4 style="color: white; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; font-size: 1.1rem;">
                                <i class="fas fa-terminal" style="color: ${accent};"></i> PROBLEM STATEMENT
                            </h4>
                            <div style="color: #f1f5f9; font-size: 1.25rem; line-height: 1.6; background: rgba(0,0,0,0.3); padding: 25px; border-radius: 15px; border-left: 5px solid ${accent};">
                                ${problemTitle}
                            </div>
                        </div>
                        <div style="padding: 35px; background: rgba(255,255,255,0.01);">
                            <h4 style="color: white; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; font-size: 1.1rem;">
                                <i class="fas fa-microchip" style="color: #f59e0b;"></i> TECHNICAL SOLUTION & LOGIC
                            </h4>
                            <div style="color: #cbd5e1; line-height: 1.8; font-size: 1.1rem;">
                                ${solutionMatter}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        results.style.display = 'block';
        empty.style.display = 'none';
        results.style.animation = 'fadeInUp 0.5s ease-out';

        setTimeout(() => {
            results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        results.style.display = 'none';
        empty.style.display = 'block';
        empty.innerHTML = `<i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.3;"></i><p>No technical breakdown found for "${query}". Try 'Arrays', 'DP', or 'Graphs'.</p>`;
    }
}

window.addEventListener('click', (e) => {
    if (!e.target.closest('.prep-search-container')) {
        const box = document.getElementById('dsa-suggestion-box');
        if (box) box.style.display = 'none';
    }
});
