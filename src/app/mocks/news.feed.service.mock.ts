import { BehaviorSubject, Observable, of } from 'rxjs';
import { NewsFeedModel } from '../interfaces/news.feed.model';

export class NewsfeedServiceMock {

    newsFeedModel: NewsFeedModel = {
        hits: [
            {
                created_at: new Date(),
                title: 'Be Kind',
                url: 'https://www.briangilham.com/blog/2016/10/10/be-kind',
                author: 'bgilham',
                points: 2475,
                story_text: null,
                comment_text: null,
                num_comments: 434,
                story_id: null,
                story_title: null,
                story_url: null,
                parent_id: null,
                created_at_i: 1476448006,
                _tags: [
                    'story',
                    'author_bgilham',
                    'story_12707606'
                ],
                objectID: '12707606',
                _highlightResult: {
                    title: {
                        value: 'Be Kind',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    url: {
                        value: 'https://www.briangilham.com/blog/2016/10/10/be-kind',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    author: {
                        value: 'bgilham',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                }
            }
        ],
        nbHits: 21520639,
        page: 2,
        nbPages: 50,
        hitsPerPage: 20,
        exhaustiveNbHits: false,
        query: '',
        params: 'advancedSyntax=true&analytics=true&analyticsTags=backend&page=2&tags=story',
        processingTimeMS: 2
    };

    newsFeedList: BehaviorSubject<NewsFeedModel> = new BehaviorSubject<NewsFeedModel>(null);
    newsFeedList$: Observable<NewsFeedModel> = this.newsFeedList.asObservable();

    getNewsFeed(tags: string[], pageNo: string): Observable<NewsFeedModel> {
        this.newsFeedList.next(this.newsFeedModel);
        return of(this.newsFeedModel);
    }

}
