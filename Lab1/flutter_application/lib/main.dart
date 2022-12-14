import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: const Text("Example 1"),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            const Image(
                width: 200,
                height: 200,
                alignment: Alignment.center,
                image: NetworkImage(
                    "https://img.freepik.com/free-vector/colorful-circle-frames-set-background_1017-17174.jpg?w=2000")),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                TextButton(
                  child: const Text("Button"),
                  onPressed: () => {},
                  style: const ButtonStyle(
                      foregroundColor: MaterialStatePropertyAll(Colors.black),
                      backgroundColor: MaterialStatePropertyAll(
                          Color.fromRGBO(120, 120, 120, 100))),
                ),
                const Padding(
                    padding: EdgeInsets.only(bottom: 20, right: 60, left: 60)),
                TextButton(
                  onPressed: () => {},
                  style: const ButtonStyle(
                      foregroundColor: MaterialStatePropertyAll(Colors.black),
                      backgroundColor: MaterialStatePropertyAll(
                          Color.fromRGBO(120, 120, 120, 100))),
                  child: const Text("Button"),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                TextButton(
                  child: const Text("Button"),
                  onPressed: () => {},
                  style: const ButtonStyle(
                      foregroundColor: MaterialStatePropertyAll(Colors.black),
                      backgroundColor: MaterialStatePropertyAll(
                          Color.fromRGBO(120, 120, 120, 100))),
                ),
                const Padding(
                    padding: EdgeInsets.only(top: 0, right: 60, left: 60)),
                TextButton(
                  child: const Text("Button"),
                  onPressed: () => {},
                  style: const ButtonStyle(
                      foregroundColor: MaterialStatePropertyAll(Colors.black),
                      backgroundColor: MaterialStatePropertyAll(
                          Color.fromRGBO(120, 120, 120, 100))),
                ),
              ],
            ),
            SizedBox(height: 40),
            Row(
              children: [
                SizedBox(width: 10),
                FittedBox(
                  fit: BoxFit.contain,
                  child: Text("Email "),
                ),
                SizedBox(width: 60),
                SizedBox(width: 200, child: TextField())
              ],
            )
          ],
        ));
  }
}
