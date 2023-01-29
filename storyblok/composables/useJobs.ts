

const state = reactive({
  jobs: [],
});

export function useJobs() {
  const storyapi = useStoryblokApi();

  async function fetchJobs() {

      const { data } = await storyapi.get("cdn/stories/", {

        version: process.env.NODE_ENV === "production" ?  "published" : "draft",
        starts_with: "jobs/",
      });
      state.jobs = data.stories;

    }



  return {
    ...toRefs(state),
    fetchJobs,

}}
