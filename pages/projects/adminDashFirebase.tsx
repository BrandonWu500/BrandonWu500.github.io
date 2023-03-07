import ProjectWrapper from '@/components/ProjectWrapper';

const adminDashFirebase = () => {
  return (
    <ProjectWrapper>
      <section
        id="admin-dash-firebase"
        className="mx-auto flex flex-col gap-4 leading-8"
      >
        <h3 className="font-bold text-lg">Admin Dashboard with Firebase</h3>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
          <a
            href="https://github.com/BrandonWu500/admin-dashboard"
            target="_blank"
          >
            https://github.com/BrandonWu500/admin-dashboard
          </a>
        </div>

        <p>Below is a video walkthrough of the app's functionality:</p>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/-oSz-sxYN6A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        {/* <!-- admin dashboard firebase case study --> */}
        <div className="font-arial flex flex-col gap-4">
          <h4 className="font-semibold mt-8 text-lg">Case Study:</h4>
          <p>
            This project is a continuation of the admin dashboard frontend. It
            uses Google Firebase as a backend to provide dynamic data for users,
            products, and orders. It also adds a third color theme option
            (blue).
          </p>
          <div>
            <h5 className="font-bold">Firebase:</h5>
            <p>
              This was my first time using Firebase. However, I did have
              previous experience with MongoDB, which is also a NoSQL database,
              so that definitely helped me pick it up faster. I knew how to
              structure my code to make the CRUD operations, I just had to learn
              the exact syntax used by Firebase.
            </p>
          </div>
          <div>
            <h5 className="font-bold">What I liked:</h5>
            <p>
              One cool thing about Firebase is that I could directly use it in
              my React code. I didn't have to set up a backend with NodeJS and
              Express. All that was needed was the firebase config file.
            </p>
          </div>
          <p>
            Another cool feature I liked about Firebase was being able to work
            with realtime data easily.
          </p>
          <img
            src="/static/screenshots/admin-firebase/realtime-data.png"
            alt=""
            className="mb-8"
          />
          <p>
            Using the code shown above, I was able to set up a listener that
            constantly checked for updates to the data collection. So, if I was
            on the data table page, and I made a change to the data on the
            firebase site, it would immediately update the data table without me
            having to manually reload the page.
          </p>
          <video
            src="/static/screenshots/admin-firebase/realtime-data-480.mp4"
            loop
            muted
            autoPlay
            className="mb-8"
          ></video>
          <div>
            <h5 className="font-bold">Firebase Challenges:</h5>
            <p>
              One of the main challenges I ran into when using Firebase was when
              I was trying to implement the file upload feature on the edit user
              info page. Using the boilerplate code they had in the
              documentation, I was able to get the image preview option to work.
              Thus, I had no problems with the add user/item option, or so I
              thought. However, when it came time to test the edit user option,
              after hitting the save button, I realized that sometimes the image
              updated correctly, and sometimes it reverted back to the old
              image. I monitored the upload progress and it showed 100% every
              time, but still, it didn't save properly every time. I was so
              confused!
            </p>
          </div>
          <p>
            However, after a few console.logs in the handleSave function, I
            realized that the img url wasn't being updated sometimes after the
            uploadFile function was called. After examining the boilerplate code
            more carefully, I realized the mistake I had made. All the way at
            the bottom, where I was updating the info to hold the new image url,
            I noticed the getDownloadURL function returned a promise. When the
            image url wasn't updating properly, that promise must not have been
            resolved yet. I tested my theory by hitting the save button as soon
            as possible vs. waiting 5 seconds. Sure enough, when I waited 5
            seconds every time the image updated properly. My mistake had been
            only taking into consideration the image upload progress, and
            forgetting about the time it took to get the download url after. I
            fixed the problem by adding a separate useState hook that tracked
            the getDownloadUrl progress and returned true only after the image
            url had been updated properly.
          </p>
          <img
            src="/static/screenshots/admin-firebase/firebase-challenge-1.png"
            alt=""
          />
          <img
            src="/static/screenshots/admin-firebase/firebase-challenge-2.png"
            alt=""
            className="mb-8"
          />
          <div>
            <h5 className="font-bold">Dynamic Data Changes:</h5>
            <p>
              Now, I want to talk about two of the big changes I made by working
              with dynamic data instead of the static mock data.
            </p>
          </div>
          <p>
            Since I was making async requests to firebase now, I had to add
            loading text to the different components that fetched data. Without
            it, a user with slow internet connection could open up a page and
            see no items found when in reality the data was still being fetched.
          </p>
          <p>
            For most of the components, this wasn't a problem. However, in the
            data table component I ran into an issue when there was actually no
            data in the collection. Originally, I had it that when data was
            fetched it would set isLoading to false, but since I was using a
            real time listener, it would just keep fetching and never show “no
            items found”. The way I got around this was by adding a check to see
            if the data array being returned had a length of 0, and changing the
            title and isLoading variable accordingly.
          </p>
          <p>
            Unfortunately, the problem with that approach was that it would now
            set isLoading to false before the data had even begun to fetch
            because the initial array in the useState had a length of 0.
          </p>
          <p>
            Finally, I decided to use a setTimeout function and after a certain
            period of time, only then would it set isLoading to false. The
            setTimeout was only called in the event that the data array had a
            length of 0. This meant that if there was data in the collection,
            the loading text would properly show up before the data was loaded.
            However, if there was no data, the loading text would stay on the
            screen for the duration of the timeout before showing “no items
            found”.
          </p>
          <img
            src="/static/screenshots/admin-firebase/set-timeout.png"
            alt=""
            className="mb-8"
          />
          <p>With Data in Collection:</p>
          <video
            src="/static/screenshots/admin-firebase/realtime-data-load-480.mp4"
            loop
            muted
            autoPlay
            className="mb-8"
          ></video>
          <p>No Data in Collection:</p>
          <video
            src="/static/screenshots/admin-firebase/realtime-no-data-load-480.mp4"
            loop
            muted
            autoPlay
            className="mb-8"
          ></video>
          <p>
            The second big change I had to account for was the changing order of
            headers in the data table as well as the input fields in the edit
            info component. What I mean by this is that because I was now
            fetching document fields in each collection and using Object.keys()
            to map them out, the order would change every time I reloaded the
            page. I wasn't quite sure how to sort them in the same order every
            time, but after searching on stack overflow, I found a simple
            solution that works well.
          </p>
          <img
            src="/static/screenshots/admin-firebase/fixed-order-datatable-headers.png"
            alt=""
            className="mb-8"
          />
          <p>
            Also as shown above, specifically for the data table page, I wanted
            to store the name and image of the item under one column, so I first
            filtered out the name and image fields from the object and then used
            the spread operator in combination with the slice() method to add
            that column name in a fixed position every time.
          </p>
          <div>
            <h5 className="font-bold">Third color theme:</h5>
            <p>
              The last thing I want to touch on is the third color theme option
              that I promised I would implement with this iteration of the
              project. Last time, with the useContext and useReducer hooks I was
              able to create a light and dark mode. I had done this by toggling
              a boolean state variable.
            </p>
          </div>
          <p>
            However, in order to add the third color theme (blue), I ended up
            changing that state variable to a string and using that to add a
            className name to the global app. Most of the work for this part of
            the project actually was refactoring the scss so that I could have
            separate scss files for each theme, as opposed to default styles for
            the components and a dark mode scss file.
          </p>
          <div>
            <h5 className="font-bold">Conclusion:</h5>
            <p>
              Overall, this was a fun way to learn Firebase and also convert a
              static frontend to a more dynamic website. That being said, there
              are still some static components that I kept because I primarily
              wanted to focus on data for users, products, and orders. I'm
              pretty happy that I was able to successfully implement all the
              CRUD operations for these collections, and also build data tables
              that filtered based on the shared data between the collections (as
              seen on the edit info page).
            </p>
          </div>
          <div>
            <h5 className="font-bold">What's Next?:</h5>
            <p>
              Now that I have more experience with React, as well as some
              experience with TypeScript and Sass, my next goal is to learn
              Next.js. The cool thing about learning Next is that it will
              basically utilize everything I have learned up until now and build
              on top of it. The thing I am most excited about is the ability to
              server-side render and generate static websites with basically
              just React code. So you kind of get the best of both worlds!
            </p>
          </div>
        </div>
      </section>
    </ProjectWrapper>
  );
};
export default adminDashFirebase;
